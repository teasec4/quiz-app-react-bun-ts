import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/postcss'

export default defineConfig({
  plugins: [react()],
  base: '/quiz-app-react-bun-ts/',
  root: 'src',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
      ],
    },
  },
  build: {
    outDir: '../dist',
    sourcemap: false,
    minify: 'esbuild',
    emptyOutDir: true,
  }
})
