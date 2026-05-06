import { useState, useEffect, useRef } from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import "./App.css";
import { useLanguage } from "./context/LanguageContext";
import TranslatorCard from "./components/TranslatorCard";
import TranslationHistory from "./components/TranslationHistory";
import ThemeToggle from "./components/ThemeToggle";
import UILangSwitcher from "./components/UILangSwitcher";
import AboutPage from "./pages/AboutPage";
import tafsiriLogo from "./assets/Tafsiri logo.png";

const MAX_HISTORY = 20;

export default function App() {
  const { t } = useLanguage();
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [history, setHistory] = useState([]);
  const [toast, setToast] = useState({ msg: "", visible: false });
  const [ffWarn] = useState(
    () =>
      typeof navigator !== "undefined" &&
      navigator.userAgent.includes("Firefox"),
  );
  const toastTimer = useRef(null);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const showToast = (msg) => {
    clearTimeout(toastTimer.current);
    setToast({ msg, visible: true });
    toastTimer.current = setTimeout(
      () => setToast((prev) => ({ ...prev, visible: false })),
      2400,
    );
  };

  const addToHistory = (item) =>
    setHistory((prev) =>
      [item, ...prev.filter((h) => h.id !== item.id)].slice(0, MAX_HISTORY),
    );

  const clearHistory = () => setHistory([]);

  return (
    <div>
      {/* ── Header ── */}
      <header className="app-header">
        <div className="app-logo">
          <img
            src={tafsiriLogo}
            alt="TafsiriAI logo"
            className="app-logo-img"
          />
          <span className="app-logo-wordmark">TafsiriAI</span>
          <span className="app-logo-badge">v1.0</span>
        </div>

        <nav className="app-nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "app-nav-link app-nav-link--active" : "app-nav-link"
            }
            onClick={() => setMenuOpen(false)}
          >
            {t("nav.translator")}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "app-nav-link app-nav-link--active" : "app-nav-link"
            }
            onClick={() => setMenuOpen(false)}
          >
            {t("nav.about")}
          </NavLink>

          <UILangSwitcher />
          <ThemeToggle dark={dark} onToggle={() => setDark((d) => !d)} />

          {/* ADD — hamburger button */}
          <button
            className="app-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
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
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
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
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </nav>
      </header>

      {/* ADD — mobile dropdown, place this directly after </header> and before <Routes> */}
      {menuOpen && (
        <div className="app-mobile-menu">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "app-nav-link app-nav-link--active" : "app-nav-link"
            }
            onClick={() => setMenuOpen(false)}
          >
            {t("nav.translator")}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "app-nav-link app-nav-link--active" : "app-nav-link"
            }
            onClick={() => setMenuOpen(false)}
          >
            {t("nav.about")}
          </NavLink>
        </div>
      )}

      {/* ── Routes ── */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Hero */}
              <section className="app-hero">
                <div>
                  <p className="app-hero-eyebrow">{t("hero.eyebrow")}</p>
                  <h1 className="app-hero-headline">
                    {t("hero.headline1")}
                    <br />
                    <em>{t("hero.headline2")}</em>
                    <br />
                    {t("hero.headline3")}
                  </h1>
                </div>
                <div>
                  <p className="app-hero-desc">{t("hero.desc")}</p>
                  <div className="app-hero-stats">
                    {[
                      [t("hero.stat1Num"), t("hero.stat1Label")],
                      [t("hero.stat2Num"), t("hero.stat2Label")],
                      [t("hero.stat3Num"), t("hero.stat3Label")],
                    ].map(([num, label]) => (
                      <div key={label} className="app-stat">
                        <div className="app-stat-num">{num}</div>
                        <div className="app-stat-label">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Main */}
              <main className="app-main">
                {ffWarn && (
                  <div className="app-browser-warn">⚠ {t("browserWarn")}</div>
                )}
                <TranslatorCard
                  onNewTranslation={addToHistory}
                  onToast={showToast}
                />
                <TranslationHistory
                  items={history}
                  onSelect={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  onClear={clearHistory}
                />
              </main>
            </>
          }
        />

        <Route path="/about" element={<AboutPage />} />
      </Routes>

      {/* ── Footer ── */}
      <footer className="app-footer">
        <span className="app-footer-copy">{t("footer.copy")}</span>
        {/*<div className="app-footer-links">
          {[
            ["GitHub", "https://github.com"],
            ["MyMemory", "https://mymemory.translated.net"],
            ["LibreTranslate", "https://libretranslate.com"],
          ].map(([label, href]) => (
            <a
              key={label}
              className="app-footer-link"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          ))}
        </div>*/}
      </footer>

      {/* ── Toast ── */}
      <div className={`app-toast ${toast.visible ? "show" : ""}`}>
        {toast.msg}
      </div>
    </div>
  );
}
