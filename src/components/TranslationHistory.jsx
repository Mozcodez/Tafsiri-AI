import './TranslationHistory.css'
import { getLangName } from '../utils/languages'
import { useLanguage } from '../context/LanguageContext'

export default function TranslationHistory({ items, onSelect, onClear }) {
  const { t } = useLanguage()
  if (!items.length) return null

  return (
    <section className="th-section">
      <div className="th-label">
        <span className="th-label-left">
          {t('history.label')}
          <span className="th-count-badge">{items.length}</span>
        </span>
        <button className="th-clear-btn" onClick={onClear}>
          {t('history.clear')}
        </button>
      </div>

      <div className="th-grid">
        {items.map((item, i) => (
          <div
            key={item.id}
            className="th-item"
            style={{ animationDelay: `${i * 0.04}s` }}
            onClick={() => onSelect(item)}
          >
            <div className="th-item-langs">
              <span>
                {item.sourceLang === 'autodetect'
                  ? t('history.autoLang')
                  : getLangName(item.sourceLang)}
                {' → '}
                {getLangName(item.targetLang)}
              </span>
              <span className="th-item-time">{item.time}</span>
            </div>
            <p className="th-item-source">{item.sourceText}</p>
            <p className="th-item-translation">{item.translatedText}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
