import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  build: {
    rollupOptions: {
      // Ensure all necessary assets are included in the build
      input: {
        main: './index.html',
      },
    },
  },
  base: '/',
  plugins: [
    tailwindcss(),
  ],
})