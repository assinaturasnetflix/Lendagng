// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Inclui .js para nossos arquivos React
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Um azul escuro e forte (ex: Azul Marinho)
        secondary: '#10B981', // Um verde vibrante para CTAs (ex: Esmeralda)
        accent: '#F59E0B', // Um âmbar para destaques (ex: Âmbar)
        background: '#0F172A', // Um fundo bem escuro (ex: Azul Ardósia Escuro)
        textDark: '#E2E8F0', // Texto claro para fundos escuros (ex: Ardósia Clara)
        textLight: '#1F2937', // Texto escuro para fundos claros (raro neste tema)
        card: '#1E293B', // Cor para cards em fundo escuro
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Fonte moderna e limpa
        display: ['Montserrat', 'sans-serif'], // Fonte para títulos, mais "de peso"
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-1000px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
