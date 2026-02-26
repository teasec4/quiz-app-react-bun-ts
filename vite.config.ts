import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/quiz-app-react-bun-ts/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
  }
})
