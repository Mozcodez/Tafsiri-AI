import { useState, useRef, useCallback } from 'react'

export function useSpeechSynthesis() {
  const [speaking, setSpeaking] = useState(false)
  const utterRef = useRef(null)

  const speak = useCallback((text, lang = 'en') => {
    if (!window.speechSynthesis) return

    // Cancel any ongoing speech
    window.speechSynthesis.cancel()

    const utter = new SpeechSynthesisUtterance(text)
    utter.lang  = lang

    // Prefer a voice that matches the language
    const voices = window.speechSynthesis.getVoices()
    const match  = voices.find(v => v.lang.startsWith(lang))
    if (match) utter.voice = match

    utter.onstart = () => setSpeaking(true)
    utter.onend   = () => setSpeaking(false)
    utter.onerror = () => setSpeaking(false)

    utterRef.current = utter
    window.speechSynthesis.speak(utter)
  }, [])

  const stop = useCallback(() => {
    window.speechSynthesis?.cancel()
    setSpeaking(false)
  }, [])

  const toggle = useCallback((text, lang) => {
    speaking ? stop() : speak(text, lang)
  }, [speaking, speak, stop])

  return { speaking, speak, stop, toggle }
}
