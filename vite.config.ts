import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { splitVendorChunkPlugin } from 'vite'

/// <reference types="vite/client" />
/// <reference types="node" />

export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          charts: ['recharts', 'apexcharts'],
          vendor: ['lodash', 'date-fns']
        }
      }
    }
  }
})

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
