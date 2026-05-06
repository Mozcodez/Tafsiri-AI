import './LanguageSelector.css'
import { LANGUAGES } from '../utils/languages'

export default function LanguageSelector({
  value,
  onChange,
  label,
  showAuto = false,
  autoDetect,
  autoLabel = 'Auto',
  onToggleAuto,
}) {
  return (
    <div className="ls-wrapper">
      <span className="ls-label">{label}</span>

      {showAuto && (
        <button
          className={`ls-auto-badge ${autoDetect ? 'ls-auto-badge--on' : 'ls-auto-badge--off'}`}
          onClick={onToggleAuto}
          title="Toggle auto-detect source language"
        >
          {autoLabel}
        </button>
      )}

      <select
        className="ls-select"
        value={value}
        onChange={e => onChange(e.target.value)}
        aria-label={`${label} language`}
      >
        {LANGUAGES.map(lang => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  )
}
