/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['Syne', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      keyframes: {
        micPulse: { '0%,100%': { opacity: '1', transform: 'scale(1)' }, '50%': { opacity: '0', transform: 'scale(1.4)' } },
        loadBar: { '0%': { left: '-50%' }, '100%': { left: '150%' } },
        fadeIn: { '0%': { opacity: '0', transform: 'translateY(10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(80px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        'mic-pulse': 'micPulse 1s ease-in-out infinite',
        'load-bar': 'loadBar 0.9s ease-in-out infinite',
        'fade-in': 'fadeIn 0.35s ease forwards',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16,1,0.3,1) forwards',
      },
    },
  },
  plugins: [],
}
