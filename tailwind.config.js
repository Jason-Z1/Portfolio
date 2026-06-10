/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0a192f',
        'navy-light': '#0b1f3a',
        'navy-lighter': '#112240',
        slate: '#8892b0',
        'slate-light': '#a8b2d8',
        'slate-lighter': '#ccd6f6',
        'white-ish': '#e6f1ff',
        teal: '#64ffda',
        'teal-dark': '#52d9b8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"SF Mono"', '"Fira Code"', '"Fira Mono"', 'monospace'],
      },
      screens: {
        xs: '480px',
      },
      animation: {
        'cursor-blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
