/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#4361ee',
          600: '#3b56d9',
          700: '#3046c4',
          800: '#2535a0',
          900: '#1a2480',
        },
        accent: '#7367f0',
        success: '#28c76f',
        warning: '#ff9f43',
        danger:  '#ea5455',
        info:    '#00cfe8',
        sidebar: {
          bg:      '#1e2139',
          hover:   '#252b4b',
          active:  '#4361ee',
          text:    '#a8b1cc',
          heading: '#5a607a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px 0 rgba(34,41,47,.1)',
        'card-dark': '0 4px 24px 0 rgba(0,0,0,.3)',
      },
      transitionDuration: {
        250: '250ms',
      },
    },
  },
  plugins: [],
}
