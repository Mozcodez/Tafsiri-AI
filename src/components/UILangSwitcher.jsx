import { useLanguage } from '../context/LanguageContext'
import './UILangSwitcher.css'

export default function UILangSwitcher() {
  const { uiLang, setUiLang } = useLanguage()

  return (
    <div className="uls-wrapper" role="group" aria-label="UI language switcher">
      {[
        { code: 'sw', label: 'SW' },
        { code: 'en', label: 'EN' },
      ].map(({ code, label }) => (
        <button
          key={code}
          className={`uls-btn ${uiLang === code ? 'uls-btn--active' : ''}`}
          onClick={() => setUiLang(code)}
          aria-pressed={uiLang === code}
          title={code === 'sw' ? 'Badilisha kwa Kiswahili' : 'Switch to English'}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
