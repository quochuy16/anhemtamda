import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11'], // Hỗ trợ trình duyệt cũ
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'] // Hỗ trợ async/await
    })
  ],
  esbuild: {
    jsx: "automatic",
  },
})
