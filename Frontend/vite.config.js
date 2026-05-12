import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    host: '0.0.0.0',
    port: 5173
  },

  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1000
  },

  define: {
    __APP_ENV__: JSON.stringify(process.env.NODE_ENV),
  }
})