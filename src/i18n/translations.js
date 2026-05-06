/* ─────────────────────────────────────────────────────
   translations.js
   All UI strings for English (en) and Swahili (sw)
───────────────────────────────────────────────────── */

const translations = {
  en: {
    /* ── Header / Nav ── */
    nav: {
      translator: "Translator",
      about: "About",
    },

    /* ── Home Hero ── */
    hero: {
      eyebrow: "AI-Powered · Free · No Signing-in",
      headline1: "Translate",
      headline2: "Anything,",
      headline3: "Instantly.",
      desc: "Speak, type, or paste text across 50+ languages.  With voice input and speech output built directly into your browser — no accounts, no costs.",
      stat1Num: "50+",
      stat1Label: "Languages",
      stat2Num: "0",
      stat2Label: "Running Cost",
      stat3Num: "∞",
      stat3Label: "Possibilities",
    },

    /* ── Browser warning ── */
    browserWarn:
      "Voice features (mic & text-to-speech) require Chrome, Edge, or Safari. Translation still works in Firefox.",

    /* ── Translator Card ── */
    card: {
      fromLabel: "From",
      toLabel: "To",
      autoLabel: "Auto",
      inputPlaceholder: "Type or paste text here… (Ctrl+Enter to translate)",
      outputPlaceholder: "Translation appears here…",
      clearBtn: "Clear All",
      translateBtn: "Translate →",
      translatingBtn: "Translating…",
      copyTitle: "Copy translation",
      micTitle: "Voice input",
      micStop: "Stop listening",
      ttsTitle: "Read aloud",
      ttsStop: "Stop reading",
      clearTitle: "Clear text",
      statusReady: "Ready",
      statusLoading: "Translating…",
      statusError: "Error",
      fallbackBadge: "Fallback",
      toastNoText: "Enter some text first",
      toastLimitExceeded: "Text exceeds 5000 character limit",
      toastFallback: "Translated via LibreTranslate (fallback)",
      toastNoCopy: "Nothing to copy",
      toastCopied: "Copied ✓",
      toastNoTTS: "Nothing to read aloud",
      toastNoMic: "Voice input not supported in this browser",
    },

    /* ── Translation History ── */
    history: {
      label: "Translation History",
      clear: "Clear",
      autoLang: "Auto",
    },

    /* ── Footer ── */
    footer: {
      copy: "© 2026 TafsiriAI · React  · Zero cost, zero backend",
    },

    /* ── About Page ── */
    about: {
      heroEyebrow: "About TafsiriAI",
      heroHeadline1: "Every word",
      heroHeadline2: "deserves,",
      heroHeadline3: "to be understood.",
      heroDesc:
        "TafsiriAI is a fully React application that translates text across 50+ languages quickly — no backend, no accounts, no costs. Voice input and text-to-speech are powered entirely by the browser's built-in Web Speech API.",
      heroMeta1: "MyMemory API — Live & ready",
      heroMeta2: "LibreTranslate fallback — Active",
      heroMeta3: "52 languages supported",

      howToLabel: "How to use",
      howToTitle: "Four steps to any translation.",
      howToSubtitle:
        "The interface is designed to stay out of your way. Here's everything you need to know to get started in under a minute.",

      step1Title: "Pick Your Languages",
      step1Desc:
        "Select a source language — or leave Auto on to let the API detect it — then choose your target language from the dropdown.",
      step2Title: "Enter Your Text",
      step2Desc:
        "Type or paste up to 5,000 characters in the left panel. The live counter tracks your usage and warns before you hit the limit.",
      step3Title: "Translate",
      step3Desc:
        "Click Translate — or press Ctrl+Enter — and the result appears on the right. The app tries MyMemory first, falling back to LibreTranslate automatically.",
      step4Title: "Use Your Translation",
      step4Desc:
        "Copy the result to clipboard, have it read aloud in the target language, or swap languages to translate back. All saved in session history.",

      featuresLabel: "All features",
      feat1Title: "Voice Input",
      feat1Desc:
        "Click the microphone and speak — your words transcribe live into the input field in the selected source language.",
      feat2Title: "Text to Speech",
      feat2Desc:
        "Hit the speaker button to hear the translation read aloud. The browser automatically picks the best voice for the target language.",
      feat3Title: "Language Swap",
      feat3Desc:
        "The swap button flips source and target languages and moves the translated text into the input — ready for a reverse translation.",
      feat4Title: "Translation History",
      feat4Desc:
        "Your last 20 translations are kept in the session. Click any history card to reload it back into the translator instantly.",
      feat5Title: "Auto-Detect Language",
      feat5Desc:
        "Enable the Auto badge next to the source selector and MyMemory will detect the language of your input automatically.",
      feat6Title: "API Fallback",
      feat6Desc:
        "If MyMemory fails or hits its daily limit, the app silently retries with LibreTranslate and shows a notice telling you which API was used.",

      shortcutsLabel: "Keyboard shortcuts",
      browserLabel: "Browser support",

      stackLabel: "Tech stack",
      stackTitle: "Built entirely on free, open tools.",
      stackSubtitle:
        "Every layer of this app was chosen to demonstrate real-world React skills while keeping the total running cost at exactly zero.",
      apiLabel: "API reference",
      structureLabel: "Project structure",

      ctaText1: "Ready to start",
      ctaText2: "translating?",
      ctaBtn: "Open Translator →",
    },
  },

  /* ══════════════════════════════════════════════════
     SWAHILI
  ══════════════════════════════════════════════════ */
  sw: {
    nav: {
      translator: "Tafsiri",
      about: "Kuhusu",
    },

    hero: {
      eyebrow: "Inaendeshwa na AI · Bure · Bila Kujisajili",
      headline1: "Tafsiri",
      headline2: "Chochote,",
      headline3: "Papo Hapo.",
      desc: "Sema, andika, au weka maandishi katika lugha 50+. Kuingiza sauti na kusoma maandishi kwa sauti vinaendeshwa kabisa na API ya Web Speech iliyopo ndani ya kivinjari. — bila akaunti, bila gharama.",
      stat1Num: "50+",
      stat1Label: "Lugha",
      stat2Num: "0",
      stat2Label: "Gharama",
      stat3Num: "∞",
      stat3Label: "Uwezekano",
    },

    browserWarn:
      "Vipengele vya sauti (maikrofoni na maandishi-kwa-hotuba) vinahitaji Chrome, Edge, au Safari. Utafsiri bado unafanya kazi kwenye Firefox.",

    card: {
      fromLabel: "Kutoka",
      toLabel: "Kwenda",
      autoLabel: "Automatiki",
      inputPlaceholder: "Andika au weka maandishi hapa… (Ctrl+Enter kutafsiri)",
      outputPlaceholder: "Tafsiri itaonekana hapa…",
      clearBtn: "Futa Yote",
      translateBtn: "Tafsiri →",
      translatingBtn: "Inatafsiri…",
      copyTitle: "Nakili tafsiri",
      micTitle: "Uingizaji wa sauti",
      micStop: "Acha kusikiliza",
      ttsTitle: "Soma kwa sauti",
      ttsStop: "Acha kusoma",
      clearTitle: "Futa maandishi",
      statusReady: "Iko tayari",
      statusLoading: "Inatafsiri…",
      statusError: "Hitilafu",
      fallbackBadge: "Mbadala",
      toastNoText: "Ingiza maandishi kwanza",
      toastLimitExceeded: "Maandishi yanazidi kikomo cha herufi 5000",
      toastFallback: "Imetafsiriwa kupitia LibreTranslate (mbadala)",
      toastNoCopy: "Hakuna cha kunakili",
      toastCopied: "Imenakiliwa ✓",
      toastNoTTS: "Hakuna cha kusoma kwa sauti",
      toastNoMic: "Uingizaji wa sauti haukuungwa mkono kwenye kivinjari hiki",
    },

    history: {
      label: "Historia ya Tafsiri",
      clear: "Futa",
      autoLang: "Otomatiki",
    },

    footer: {
      copy: "© 2026 TafsiriAI · React · Bila gharama, Bila kujisajili",
    },

    about: {
      heroEyebrow: "Kuhusu TafsiriAI",
      heroHeadline1: "Kila neno",
      heroHeadline2: "linastahili,",
      heroHeadline3: "kueleweka.",
      heroDesc:
        "TafsiriAI ni programu ya React inayotafsiri maandishi katika lugha 50+ kwa haraka — bila seva, bila akaunti, bila gharama. Uingizaji wa sauti na maandishi-kwa-hotuba vinaendeshwa na Web Speech API ya kivinjari.",
      heroMeta1: "MyMemory API — Hai na iko tayari",
      heroMeta2: "LibreTranslate mbadala — Inafanya kazi",
      heroMeta3: "Lugha 52 zinazoungwa mkono",

      howToLabel: "Jinsi ya kutumia",
      howToTitle: "Hatua nne kwa tafsiri yoyote.",
      howToSubtitle:
        "Kiolesura kimeundwa kuwa rahisi. Hapa kuna kila kitu unachohitaji kujua ili kuanza kutumia ndani ya dakika moja.",

      step1Title: "Chagua Lugha Zako",
      step1Desc:
        "Chagua lugha ya chanzo — au acha Otomatiki ili API igundue — kisha chagua lugha ya lengo kutoka kwenye menyu.",
      step2Title: "Ingiza Maandishi Yako",
      step2Desc:
        "Andika au bandika herufi hadi 5,000 kwenye paneli ya kushoto. Kihesabu cha moja kwa moja hufuatilia matumizi yako.",
      step3Title: "Tafsiri",
      step3Desc:
        "Bofya Tafsiri — au bonyeza Ctrl+Enter — na matokeo yataonekana upande wa kulia. Programu inajaribu MyMemory kwanza, kisha LibreTranslate kiotomatiki.",
      step4Title: "Tumia Tafsiri Yako",
      step4Desc:
        "Nakili matokeo kwenye ubao wa kunakili, yasisomwe kwa sauti katika lugha ya lengo, au badilisha lugha kutafsiri nyuma. Yote yamehifadhiwa katika historia ya kipindi.",

      featuresLabel: "Vipengele vyote",
      feat1Title: "Uingizaji wa Sauti",
      feat1Desc:
        "Bofya maikrofoni na uzungumze — maneno yako yanaandikwa moja kwa moja kwenye sehemu ya uingizaji.",
      feat2Title: "Maandishi kwa Hotuba",
      feat2Desc:
        "Bonyeza kitufe cha spika kusikia tafsiri ikisomwa kwa sauti. Kivinjari huchagua sauti bora kwa lugha ya lengo.",
      feat3Title: "Kubadilisha Lugha",
      feat3Desc:
        "Kitufe cha kubadilisha kinabadilisha lugha za chanzo na lengo na kuhamisha maandishi yaliyotafsiriwa kwenye uingizaji.",
      feat4Title: "Historia ya Tafsiri",
      feat4Desc:
        "Tafsiri zako 20 za mwisho zimehifadhiwa katika kipindi. Bofya kadi yoyote ya historia kuirudisha kwenye mtafsiri.",
      feat5Title: "Kugundua Lugha Kiotomatiki",
      feat5Desc:
        "Wezesha beji ya Otomatiki karibu na kichaguzi cha chanzo na MyMemory itagundua lugha ya uingizaji wako kiotomatiki.",
      feat6Title: "API Mbadala",
      feat6Desc:
        "Ikiwa MyMemory inashindwa au kufikia kikomo chake cha kila siku, programu inajaribu tena na LibreTranslate na kuonyesha taarifa.",

      shortcutsLabel: "Njia za mkato za kibodi",
      browserLabel: "Uungwaji mkono wa kivinjari",

      stackLabel: "Rasilimali za kiufundi",
      stackTitle: "Imejengwa kwa zana za bure na wazi.",
      stackSubtitle:
        "Kila safu ya programu hii ilichaguliwa kuonyesha ujuzi wa React wa ulimwengu halisi huku ikiweka gharama ya jumla sifuri.",
      apiLabel: "Maelezo ya API",
      structureLabel: "Muundo wa mradi",

      ctaText1: "Uko tayari kuanza",
      ctaText2: "kutafsiri?",
      ctaBtn: "Fungua Mtafsiri →",
    },
  },
};

export default translations;
