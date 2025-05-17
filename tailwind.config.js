/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./App.js", // Adicione App.js para o Tailwind escanear classes
    "./main.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#08D9D6', // Um verde-azulado vibrante
        secondary: '#252A34', // Um cinza escuro azulado
        accent: '#FF2E63', // Um rosa/vermelho para destaque
        background: '#0F1624', // Mais escuro que o cinza 900 padrão
        textPrimary: '#EAEAEA',
        textSecondary: '#A0AEC0',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        }
      }
    },
  },
  plugins: [],
}
