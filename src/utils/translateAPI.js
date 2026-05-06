/**
 * translateAPI.js
 * Primary: MyMemory (free, no key required for basic use)
 * Fallback: LibreTranslate (open-source, rate-limited)
 */

const MYMEMORY_URL = "https://api.mymemory.translated.net/get";
const LIBRETRANSLATE_URL = "https://libretranslate.com/translate";

/**
 * Translate text using MyMemory API.
 * @param {string} text
 * @param {string} sourceLang - e.g. 'en' or 'autodetect'
 * @param {string} targetLang - e.g. 'fr'
 * @returns {Promise<{ translatedText: string, detectedLanguage: string|null, source: string }>}
 */
export async function translateWithMyMemory(text, sourceLang, targetLang) {
  const langpair =
    sourceLang === "autodetect"
      ? `autodetect|${targetLang}`
      : `${sourceLang}|${targetLang}`;

  const url = `${MYMEMORY_URL}?q=${encodeURIComponent(text)}&langpair=${encodeURIComponent(langpair)}`;
  const res = await fetch(url);

  if (!res.ok) throw new Error(`MyMemory HTTP ${res.status}`);

  const data = await res.json();

  if (data.responseStatus !== 200) {
    throw new Error(data.responseDetails || "MyMemory returned non-200 status");
  }

  return {
    translatedText: data.responseData.translatedText,
    detectedLanguage: data.responseData.detectedLanguage || null,
    source: "MyMemory",
  };
}

/**
 * Translate text using LibreTranslate (fallback).
 */
export async function translateWithLibre(text, sourceLang, targetLang) {
  const res = await fetch(LIBRETRANSLATE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      q: text,
      source: sourceLang === "autodetect" ? "auto" : sourceLang,
      target: targetLang,
      format: "text",
    }),
  });

  if (!res.ok) throw new Error(`LibreTranslate HTTP ${res.status}`);

  const data = await res.json();

  if (!data.translatedText) {
    throw new Error("LibreTranslate: no translatedText in response");
  }

  return {
    translatedText: data.translatedText,
    detectedLanguage: data.detectedLanguage?.language || null,
    source: "LibreTranslate",
  };
}

/**
 * Main translate function — tries MyMemory, falls back to LibreTranslate.
 */
export async function translate(text, sourceLang, targetLang) {
  try {
    return await translateWithMyMemory(text, sourceLang, targetLang);
  } catch (primaryErr) {
    console.warn("MyMemory failed, trying LibreTranslate:", primaryErr.message);
    try {
      const result = await translateWithLibre(text, sourceLang, targetLang);
      return { ...result, usedFallback: true };
    } catch (fallbackErr) {
      throw new Error(
        "Both translation APIs failed. Please check your connection and try again.",
        { cause: fallbackErr },
      );
    }
  }
}
