// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Certifique-se que cobre seus arquivos JSX
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Um azul escuro para confiança
        secondary: '#3B82F6', // Um azul mais vibrante para acentos
        accent: '#F59E0B', // Um laranja/amarelo para CTAs
        neutral: {
          light: '#F3F4F6', // Cinza claro para fundos
          DEFAULT: '#6B7280', // Cinza para texto
          dark: '#1F2937', // Cinza escuro para texto/fundos
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Fonte moderna e limpa
        display: ['Poppins', 'sans-serif'], // Fonte para títulos, mais "de peso"
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        }
      }
    },
  },
  plugins: [],
}
