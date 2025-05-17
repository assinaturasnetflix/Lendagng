// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react() // Plugin essencial para habilitar o suporte a React (JSX, Fast Refresh, etc.)
  ],

  // --- Outras configurações comuns (opcionais, dependendo da necessidade) ---

  // server: {
  //   port: 3000, // Mudar a porta do servidor de desenvolvimento (padrão é 5173)
  //   open: true, // Abrir o navegador automaticamente ao iniciar o dev server
  //   proxy: { // Configurar proxies para APIs de backend durante o desenvolvimento
  //     '/api': {
  //       target: 'http://localhost:8000', // Seu servidor de backend
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // },

  // build: {
  //   outDir: 'dist', // Diretório de saída do build (padrão é 'dist')
  //   sourcemap: false, // Gerar sourcemaps para produção (pode ser 'true' ou 'hidden')
  //   rollupOptions: { // Opções avançadas do Rollup (o bundler usado pelo Vite)
  //     // Exemplo: para customizar a saída de arquivos
  //     // output: {
  //     //   manualChunks(id) {
  //     //     if (id.includes('node_modules')) {
  //     //       return id.toString().split('node_modules/')[1].split('/')[0].toString();
  //     //     }
  //     //   }
  //     // }
  //   }
  // },

  // resolve: {
  //   alias: { // Criar aliases para caminhos de importação
  //     // '@': path.resolve(__dirname, './src'),
  //     // '@components': path.resolve(__dirname, './src/components'),
  //   }
  //   // Para usar aliases, você também precisaria importar 'path':
  //   // import path from 'path';
  // },

  // css: {
  //   postcss: './postcss.config.js', // Especificar o caminho para postcss.config.js se não estiver na raiz
  //   // modules: { // Configurações para CSS Modules
  //   //   localsConvention: 'camelCaseOnly',
  //   // },
  // },

  // base: '/meu-subdiretorio/', // Se o site for hospedado em um subdiretório (ex: seudominio.com/meu-subdiretorio/)
});
