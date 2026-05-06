import { useState, useCallback, useRef } from 'react'
import './TranslatorCard.css'
import LanguageSelector from './LanguageSelector'
import VoiceInput from './VoiceInput'
import TextToSpeech from './TextToSpeech'
import { useTranslation } from '../hooks/useTranslation'
import { useLanguage } from '../context/LanguageContext'
import { MAX_CHARS } from '../utils/languages'

export default function TranslatorCard({ onNewTranslation, onToast }) {
  const { t } = useLanguage()

  const [sourceLang, setSourceLang] = useState('sw')
  const [targetLang, setTargetLang] = useState('en')
  const [autoDetect, setAutoDetect] = useState(false)
  const [inputText,  setInputText]  = useState('')
  const [outputText, setOutputText] = useState('')
  const [apiSource,  setApiSource]  = useState('MyMemory')
  const inputRef = useRef(null)

  const { run, loading, error, usedFallback } = useTranslation()

  const handleTranslate = useCallback(async () => {
    if (!inputText.trim()) { onToast(t('card.toastNoText')); return }
    if (inputText.length > MAX_CHARS) { onToast(t('card.toastLimitExceeded')); return }

    const effectiveSrc = autoDetect ? 'autodetect' : sourceLang
    const result = await run(inputText, effectiveSrc, targetLang)

    if (result) {
      setOutputText(result.translatedText)
      setApiSource(result.source)
      if (result.usedFallback) onToast(t('card.toastFallback'))
      onNewTranslation({
        id: Date.now(),
        sourceText: inputText,
        translatedText: result.translatedText,
        sourceLang: effectiveSrc,
        targetLang,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      })
    }
  }, [inputText, sourceLang, targetLang, autoDetect, run, onNewTranslation, onToast, t])

  const handleSwap = () => {
    setSourceLang(targetLang)
    setTargetLang(sourceLang)
    setInputText(outputText)
    setOutputText('')
  }

  const handleClear = () => {
    setInputText('')
    setOutputText('')
    inputRef.current?.focus()
  }

  const handleCopy = () => {
    if (!outputText) { onToast(t('card.toastNoCopy')); return }
    navigator.clipboard.writeText(outputText).then(() => onToast(t('card.toastCopied')))
  }

  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault()
      handleTranslate()
    }
  }

  const charCount    = inputText.length
  const charWarning  = charCount > MAX_CHARS * 0.9
  const charExceeded = charCount > MAX_CHARS

  const charCountClass = charExceeded
    ? 'tc-char-count tc-char-count--exceeded'
    : charWarning
      ? 'tc-char-count tc-char-count--warn'
      : 'tc-char-count'

  const statusDotClass = loading
    ? 'tc-status-dot tc-status-dot--warn'
    : error
      ? 'tc-status-dot tc-status-dot--err'
      : 'tc-status-dot tc-status-dot--ok'

  const statusText = loading
    ? t('card.statusLoading')
    : error
      ? t('card.statusError')
      : `${apiSource} — ${t('card.statusReady')}`

  return (
    <div className="tc-card">

      {/* ── Language Header ── */}
      <div className="tc-lang-header">
        <LanguageSelector
          label={t('card.fromLabel')}
          value={sourceLang}
          onChange={setSourceLang}
          showAuto
          autoDetect={autoDetect}
          autoLabel={t('card.autoLabel')}
          onToggleAuto={() => setAutoDetect(p => !p)}
        />

        <div className="tc-swap-col">
          <button
            className="tc-swap-btn"
            onClick={handleSwap}
            title="Swap languages"
            aria-label="Swap source and target languages"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/>
              <path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
            </svg>
          </button>
        </div>

        <LanguageSelector
          label={t('card.toLabel')}
          value={targetLang}
          onChange={setTargetLang}
        />
      </div>

      {/* ── Loading Bar ── */}
      <div className="tc-loading-track">
        {loading && <div className="tc-loading-fill" />}
      </div>

      {/* ── Text Areas ── */}
      <div className="tc-body">
        <div className="tc-panel">
          <textarea
            ref={inputRef}
            className="tc-textarea"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t('card.inputPlaceholder')}
            aria-label="Source text to translate"
            maxLength={MAX_CHARS + 100}
          />
        </div>

        <div className="tc-divider" />

        <div className="tc-panel">
          {loading ? (
            <div className="tc-loading-dots">
              {[0, 1, 2].map(i => (
                <span key={i} className="tc-dot" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
          ) : (
            <textarea
              className="tc-textarea tc-textarea--output"
              value={outputText}
              placeholder={t('card.outputPlaceholder')}
              readOnly
              aria-label="Translated text"
              aria-live="polite"
            />
          )}
        </div>
      </div>

      {/* ── Panel Footer Row ── */}
      <div className="tc-footer-row">
        <div className="tc-footer-panel">
          <span className={charCountClass}>
            {charCount.toLocaleString()} / {MAX_CHARS.toLocaleString()}
          </span>
          <div className="tc-footer-actions">
            <VoiceInput
              onResult={text => setInputText(text)}
              lang={sourceLang}
              micTitle={t('card.micTitle')}
              micStop={t('card.micStop')}
              onUnsupported={() => onToast(t('card.toastNoMic'))}
            />
            <button
              className="btn-icon"
              onClick={handleClear}
              title={t('card.clearTitle')}
              aria-label="Clear input and output"
              style={{ fontSize: '0.7rem', fontWeight: 700 }}
            >
              ✕
            </button>
          </div>
        </div>

        <div className="tc-footer-divider" />

        <div className="tc-footer-panel--right">
          <div className="tc-footer-actions">
            <TextToSpeech
              text={outputText}
              lang={targetLang}
              ttsTitle={t('card.ttsTitle')}
              ttsStop={t('card.ttsStop')}
            />
            <button
              className="btn-icon"
              onClick={handleCopy}
              title={t('card.copyTitle')}
              aria-label="Copy translated text to clipboard"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Error Banner ── */}
      {error && <div className="tc-error">⚠ {error}</div>}

      {/* ── Action Bar ── */}
      <div className="tc-action-bar">
        <div className="tc-action-bar-left">
          <span className={statusDotClass} />
          {statusText}
          {usedFallback && !error && (
            <span className="tc-fallback-badge">{t('card.fallbackBadge')}</span>
          )}
        </div>
        <div className="tc-action-bar-right">
          <button className="btn-ghost" onClick={handleClear}>
            {t('card.clearBtn')}
          </button>
          <button
            className="btn-primary"
            onClick={handleTranslate}
            disabled={loading || !inputText.trim() || charExceeded}
          >
            {loading ? t('card.translatingBtn') : t('card.translateBtn')}
          </button>
        </div>
      </div>

    </div>
  )
}
