import './VoiceInput.css'
import { useSpeechRecognition } from '../hooks/useSpeechRecognition'

export default function VoiceInput({
  onResult,
  lang,
  onUnsupported,
  micTitle = 'Voice input',
  micStop  = 'Stop listening',
}) {
  const { active, supported, toggle } = useSpeechRecognition({ onResult, lang })

  const handleClick = () => {
    if (!supported) { onUnsupported?.(); return }
    toggle()
  }

  return (
    <button
      className={`vi-btn ${active ? 'vi-btn--active' : ''}`}
      onClick={handleClick}
      title={active ? micStop : micTitle}
      aria-label={active ? micStop : micTitle}
      aria-pressed={active}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
        <line x1="12" y1="19" x2="12" y2="23"/>
        <line x1="8"  y1="23" x2="16" y2="23"/>
      </svg>
    </button>
  )
}
