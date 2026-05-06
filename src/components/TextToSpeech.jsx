import './TextToSpeech.css'
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis'

export default function TextToSpeech({
  text,
  lang,
  ttsTitle = 'Read aloud',
  ttsStop  = 'Stop reading',
}) {
  const { speaking, toggle } = useSpeechSynthesis()

  return (
    <button
      className={`tts-btn ${speaking ? 'tts-btn--speaking' : ''}`}
      onClick={() => toggle(text, lang)}
      disabled={!text}
      title={speaking ? ttsStop : ttsTitle}
      aria-label={speaking ? ttsStop : ttsTitle}
      aria-pressed={speaking}
    >
      {speaking ? (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6"  y="4" width="4" height="16" rx="1"/>
          <rect x="14" y="4" width="4" height="16" rx="1"/>
        </svg>
      ) : (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
        </svg>
      )}
    </button>
  )
}
