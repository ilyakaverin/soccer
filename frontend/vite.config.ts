import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      api: `${path.resolve(__dirname, './src/api/')}`,
      ui: `${path.resolve(__dirname, './src/ui/')}`,
      interfaces: `${path.resolve(__dirname, './src/interfaces/')}`,
      store: `${path.resolve(__dirname, './src/store/')}`,
      pages: `${path.resolve(__dirname, './src/pages/')}`,
      helper: `${path.resolve(__dirname, './src/helper/')}`,
    },
  },
})
