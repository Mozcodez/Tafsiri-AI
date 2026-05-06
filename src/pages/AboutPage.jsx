import { Link } from "react-router-dom";
import "./AboutPage.css";
import { useLanguage } from "../context/LanguageContext";

const STACK = [
  {
    layer: "Framework",
    name: "React 18",
    detail: "Functional components\nHooks only",
    badge: "Vite",
    free: false,
  },
  {
    layer: "Styling",
    name: "Tailwind CSS",
    detail: "Utility-first\nCSS custom properties",
    badge: "v3",
    free: false,
  },
  {
    layer: "Primary API",
    name: "MyMemory",
    detail: "5,000 chars/day\nNo API key needed",
    badge: "Free",
    free: true,
  },
  {
    layer: "Fallback API",
    name: "LibreTranslate",
    detail: "Open source\nRate-limited",
    badge: "Free",
    free: true,
  },
  {
    layer: "Voice Input",
    name: "SpeechRecognition",
    detail: "Web Speech API\nBuilt into browser",
    badge: "Free",
    free: true,
  },
  {
    layer: "TTS Output",
    name: "SpeechSynthesis",
    detail: "Web Speech API\nAuto voice matching",
    badge: "Free",
    free: true,
  },
  {
    layer: "Routing",
    name: "React Router v7",
    detail: "Client-side routing\nBrowserRouter",
    badge: "v7",
    free: false,
  },
  {
    layer: "Deployment",
    name: "Vercel / Netlify",
    detail: "Zero-config deploy\nFree tier",
    badge: "Free",
    free: true,
  },
];

const API_ROWS = [
  {
    name: "MyMemory",
    endpoint: "api.mymemory.translated.net/get",
    method: "GET",
    limit: "5,000 chars/day",
    key: "Not required",
    role: "Primary",
  },
  {
    name: "LibreTranslate",
    endpoint: "libretranslate.com/translate",
    method: "POST",
    limit: "Rate-limited (public)",
    key: "Not required",
    role: "Fallback",
  },
];

const SHORTCUTS = [
  { labelKey: "Translate text", keys: [["Ctrl", "⌘"], "Enter"] },
  { labelKey: "Toggle voice input", keys: ["Click mic button"] },
  { labelKey: "Read translation aloud", keys: ["Click speaker button"] },
  { labelKey: "Copy translation", keys: ["Click copy button"] },
  { labelKey: "Swap languages", keys: ["Click ⇄ button"] },
  { labelKey: "Clear all text", keys: ["Click Clear All"] },
];

const BROWSERS = [
  {
    name: "Chrome",
    dot: "full",
    support: "Full support",
    note: "Translation + Voice",
  },
  {
    name: "Edge",
    dot: "full",
    support: "Full support",
    note: "Translation + Voice",
  },
  {
    name: "Safari",
    dot: "full",
    support: "Full support",
    note: "Translation + Voice",
  },
  {
    name: "Firefox",
    dot: "partial",
    support: "Partial support",
    note: "Translation only — no Web Speech API",
  },
];

/* Step and feature icon components */
const GlobeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const EditIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);
const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);
const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const MicIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);
const SpeakerIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
  </svg>
);
const SwapIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 1l4 4-4 4" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <path d="M7 23l-4-4 4-4" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>
);
const HistoryIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const SearchIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const RefreshIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 4 23 10 17 10" />
    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
  </svg>
);

export default function AboutPage() {
  const { t } = useLanguage();

  const STEPS = [
    {
      num: "01",
      titleKey: t("about.step1Title"),
      descKey: t("about.step1Desc"),
      icon: <GlobeIcon />,
    },
    {
      num: "02",
      titleKey: t("about.step2Title"),
      descKey: t("about.step2Desc"),
      icon: <EditIcon />,
    },
    {
      num: "03",
      titleKey: t("about.step3Title"),
      descKey: t("about.step3Desc"),
      icon: <ArrowIcon />,
    },
    {
      num: "04",
      titleKey: t("about.step4Title"),
      descKey: t("about.step4Desc"),
      icon: <CheckIcon />,
    },
  ];

  const FEATURES = [
    {
      title: t("about.feat1Title"),
      desc: t("about.feat1Desc"),
      icon: <MicIcon />,
    },
    {
      title: t("about.feat2Title"),
      desc: t("about.feat2Desc"),
      icon: <SpeakerIcon />,
    },
    {
      title: t("about.feat3Title"),
      desc: t("about.feat3Desc"),
      icon: <SwapIcon />,
    },
    {
      title: t("about.feat4Title"),
      desc: t("about.feat4Desc"),
      icon: <HistoryIcon />,
    },
    {
      title: t("about.feat5Title"),
      desc: t("about.feat5Desc"),
      icon: <SearchIcon />,
    },
    {
      title: t("about.feat6Title"),
      desc: t("about.feat6Desc"),
      icon: <RefreshIcon />,
    },
  ];

  return (
    <div className="about-page">
      {/* ── Hero ── */}
      <div className="about-hero">
        <div>
          <p className="about-hero-eyebrow">{t("about.heroEyebrow")}</p>
          <h1 className="about-hero-headline">
            {t("about.heroHeadline1")}
            <br />
            <em>{t("about.heroHeadline2")}</em>
            <br />
            {t("about.heroHeadline3")}
          </h1>
        </div>
        <div>
          <p className="about-hero-desc">{t("about.heroDesc")}</p>
          <div className="about-hero-meta">
            {[
              t("about.heroMeta1"),
              t("about.heroMeta2"),
              t("about.heroMeta3"),
            ].map((m) => (
              <div key={m} className="about-hero-meta-row">
                <span className="about-meta-dot" />
                {m}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ SECTION 1 — How to use ══ */}
      <section className="about-section">
        <p className="about-section-label">{t("about.howToLabel")}</p>
        <h2 className="about-section-title">{t("about.howToTitle")}</h2>
        <p className="about-section-subtitle">{t("about.howToSubtitle")}</p>

        {/* Steps */}
        <div className="about-steps">
          {STEPS.map((step) => (
            <div key={step.num} className="about-step">
              <span className="about-step-num">{step.num}</span>
              <div className="about-step-icon">{step.icon}</div>
              <div className="about-step-title">{step.titleKey}</div>
              <p className="about-step-desc">{step.descKey}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <p className="about-section-label" style={{ marginTop: "3rem" }}>
          {t("about.featuresLabel")}
        </p>
        <div className="about-features">
          {FEATURES.map((f) => (
            <div key={f.title} className="about-feature">
              <div className="about-feature-icon">{f.icon}</div>
              <div>
                <div className="about-feature-title">{f.title}</div>
                <p className="about-feature-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Keyboard shortcuts */}
        <p className="about-section-label" style={{ marginTop: "3rem" }}>
          {t("about.shortcutsLabel")}
        </p>
        <div className="about-shortcuts">
          {SHORTCUTS.map((s) => (
            <div key={s.labelKey} className="about-shortcut">
              <span className="about-shortcut-label">{s.labelKey}</span>
              <div className="about-shortcut-keys">
                {s.keys.map((k, i) =>
                  Array.isArray(k) ? (
                    <span
                      key={i}
                      style={{ display: "flex", gap: 4, alignItems: "center" }}
                    >
                      {k.map((ki, ii) => (
                        <span
                          key={ii}
                          style={{
                            display: "flex",
                            gap: 4,
                            alignItems: "center",
                          }}
                        >
                          <span className="about-key">{ki}</span>
                          {ii < k.length - 1 && (
                            <span className="about-key-sep">/</span>
                          )}
                        </span>
                      ))}
                    </span>
                  ) : (
                    <span key={i} className="about-key">
                      {k}
                    </span>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Browser support */}
        <p className="about-section-label" style={{ marginTop: "3rem" }}>
          {t("about.browserLabel")}
        </p>
        <div className="about-browsers">
          {BROWSERS.map((b) => (
            <div key={b.name} className="about-browser">
              <div className="about-browser-name">{b.name}</div>
              <div className="about-browser-support">
                <span
                  className={`about-browser-dot about-browser-dot--${b.dot}`}
                />
                {b.support}
              </div>
              <p className="about-browser-note">{b.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ SECTION 2 — Tech Stack ══ */}
      <section className="about-section">
        {/*<p className="about-section-label">{t("about.stackLabel")}</p>
        <h2 className="about-section-title">{t("about.stackTitle")}</h2>
        <p className="about-section-subtitle">{t("about.stackSubtitle")}</p>*/}

        {/*<div className="about-stack-grid">
          {STACK.map((s) => (
            <div key={s.name} className="about-stack-card">
              <div className="about-stack-layer">{s.layer}</div>
              <div className="about-stack-name">{s.name}</div>
              <div className="about-stack-detail">
                {s.detail.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < s.detail.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </div>
              <span
                className={`about-stack-badge ${s.free ? "about-stack-badge--free" : ""}`}
              >
                {s.badge}
              </span>
            </div>
          ))}
        </div>*/}

        {/* API table */}
        {/*<p className="about-section-label" style={{ marginTop: "3rem" }}>
          {t("about.apiLabel")}
        </p>
        <table className="about-api-table">
          <thead>
            <tr>
              <th>API</th>
              <th>Endpoint</th>
              <th>Method</th>
              <th>Daily limit</th>
              <th>API Key</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {API_ROWS.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>
                  <code>{row.endpoint}</code>
                </td>
                <td>
                  <code>{row.method}</code>
                </td>
                <td>{row.limit}</td>
                <td>{row.key}</td>
                <td>{row.role}</td>
              </tr>
            ))}
          </tbody>
        </table>*/}

        {/* Project structure */}
        {/*<p className="about-section-label" style={{ marginTop: "3rem" }}>
          {t("about.structureLabel")}
        </p>
        <div
          style={{
            background: "var(--bg2)",
            border: "1px solid var(--border)",
            padding: "1.5rem",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.78rem",
            color: "var(--ink2)",
            lineHeight: "1.9",
            overflowX: "auto",
          }}
        >
          {`src/
├── App.jsx                    Root layout & routing
├── App.css
├── main.jsx                   Entry point + BrowserRouter
├── index.css                  Tokens, reset, global base
├── i18n/
│   └── translations.js        EN + SW UI strings
├── context/
│   └── LanguageContext.jsx    UI language state + t() hook
├── pages/
│   ├── AboutPage.jsx
│   └── AboutPage.css
├── components/
│   ├── TranslatorCard.jsx
│   ├── LanguageSelector.jsx
│   ├── VoiceInput.jsx
│   ├── TextToSpeech.jsx
│   ├── TranslationHistory.jsx
│   ├── ThemeToggle.jsx
│   ├── UILangSwitcher.jsx     SW / EN preset buttons
│   └── UILangSwitcher.css
├── hooks/
│   ├── useTranslation.js
│   ├── useSpeechRecognition.js
│   └── useSpeechSynthesis.js
└── utils/
    ├── translateAPI.js
    └── languages.js`}
        </div>*/}
      </section>

      {/* ── CTA ── */}
      <div className="about-cta">
        <div className="about-cta-text">
          {t("about.ctaText1")}
          <br />
          <em>{t("about.ctaText2")}</em>
        </div>
        <Link to="/" className="about-cta-btn">
          {t("about.ctaBtn")}
        </Link>
      </div>
    </div>
  );
}
