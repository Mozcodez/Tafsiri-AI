import { useState, useRef, useCallback } from 'react'

export function useSpeechRecognition({ onResult, lang = 'en' } = {}) {
  const [active, setActive]     = useState(false)
  const [supported] = useState(() =>
    typeof window !== 'undefined' &&
    ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)
  )
  const recogRef = useRef(null)

  const start = useCallback(() => {
    if (!supported) return

    const SR = window.SpeechRecognition || window.webkitSpeechRecognition
    const r  = new SR()
    r.lang              = lang
    r.interimResults    = true
    r.continuous        = false
    r.maxAlternatives   = 1

    r.onstart  = () => setActive(true)
    r.onend    = () => setActive(false)
    r.onerror  = () => setActive(false)

    r.onresult = (e) => {
      let transcript = ''
      for (let i = 0; i < e.results.length; i++) {
        transcript += e.results[i][0].transcript
      }
      onResult?.(transcript)
    }

    recogRef.current = r
    r.start()
  }, [supported, lang, onResult])

  const stop = useCallback(() => {
    recogRef.current?.stop()
    setActive(false)
  }, [])

  const toggle = useCallback(() => {
    active ? stop() : start()
  }, [active, start, stop])

  return { active, supported, toggle, start, stop }
}
