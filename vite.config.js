import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-invite/',  // required for GitHub Pages
  plugins: [react()],
})
