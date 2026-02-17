/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lavender: {
          DEFAULT: '#bba9fa',
          light: '#d4c9fc',
          dark: '#9b85f0',
        },
        'deep-plum': {
          DEFAULT: '#382d72',
          light: '#4a3d94',
          dark: '#2a2158',
        },
        'olive-earth': {
          DEFAULT: '#423e28',
          light: '#5a5538',
          dark: '#2e2b1c',
        },
        sage: {
          DEFAULT: '#7fb285',
          light: '#a3c9a7',
          dark: '#5f9465',
        },
        midnight: {
          DEFAULT: '#1e1b29',
          light: '#2d2940',
          dark: '#12101c',
        },
        cream: '#faf8f5',
        warm: '#f5f0e8',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
