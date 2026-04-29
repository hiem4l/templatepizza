/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        pizza: {
          DEFAULT: '#c0392b',
          light: '#e74c3c',
          dark: '#96281b',
        },
        cream: {
          DEFAULT: '#fdf6f0',
          dark: '#f5ebe0',
        },
        dark: {
          DEFAULT: '#1e0f07',
          mid: '#3d2817',
          light: '#6b4226',
        },
        amber: {
          DEFAULT: '#e8a835',
          light: '#f5d08a',
          dark: '#c48a1f',
        },
        warm: '#8b5e3c',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Lato', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.3em',
        ultra: '0.5em',
      },
      transitionDuration: {
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
      },
    },
  },
  plugins: [],
}
