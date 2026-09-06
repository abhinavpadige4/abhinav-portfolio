const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#a855f7',
        background: '#111827',
        'glass-bg': 'rgba(17, 24, 39, 0.6)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
        'glass-shadow': '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'lift': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)'
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-delay-100': 'fadeIn 0.8s ease-out 0.1s forwards',
        'fade-delay-200': 'fadeIn 0.8s ease-out 0.2s forwards',
        'fade-delay-300': 'fadeIn 0.8s ease-out 0.3s forwards',
        'fade-delay-400': 'fadeIn 0.8s ease-out 0.4s forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
};