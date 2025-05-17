import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({
    // Esta opção diz para o plugin processar também arquivos .js
    include: '**/*.{js,jsx,ts,tsx}',
  })],
})
