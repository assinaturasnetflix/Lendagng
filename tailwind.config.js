// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Garanta que JS esteja aqui
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0A192F', // Um azul escuro tecnológico
        'secondary': '#172A45', // Um azul um pouco mais claro
        'accent': '#64FFDA',   // Um ciano vibrante para destaque
        'light-slate': '#CCD6F6',
        'slate': '#8892B0',
        'dark-slate': '#495670',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'], // Fonte moderna e limpa
        'mono': ['Fira Code', 'monospace'], // Para toques "código"
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
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
  plugins: [
    // require('@tailwindcss/typography'), // Descomente se instalou
  ],
}
