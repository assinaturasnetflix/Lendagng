// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    // Garante que o Vite use React.createElement ao invés de transpilar JSX
    jsxRuntime: 'classic' 
  })],
})
