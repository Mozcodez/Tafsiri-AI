# Tafsiri AI -Language Translator

A fully functional React translation app.

## Tech Stack
| Layer | Technology |
|---|---|
| Frontend | React 18 (Vite) |
| Styling | Tailwind CSS + CSS custom properties |
| Translation (Primary) | MyMemory API (free, no key required) |
| Translation (Fallback) | LibreTranslate |
| Voice Input | Web Speech API — SpeechRecognition |
| Text-to-Speech | Web Speech API — SpeechSynthesis |

## Getting Started
```bash
npm install       # install deps
npm run dev       # dev server at localhost:5173
npm run build     # production build → /dist
npm run preview   # preview production build
```

## Features
- Text translation across 50+ languages
- Auto-detect source language
- Language swap with text swap
- Voice input (SpeechRecognition)
- Text-to-speech output (SpeechSynthesis)
- Copy to clipboard
- Translation history (20 items, session)
- Character counter with limit warning
- API fallback (MyMemory → LibreTranslate)
- Dark/Light mode toggle
- Fully responsive
- Ctrl+Enter keyboard shortcut
- Firefox graceful degradation



## Deploy to Netlify
```bash
npm run build
# Upload /dist at netlify.com/drop
```
