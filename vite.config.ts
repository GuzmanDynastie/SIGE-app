// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { splitVendorChunkPlugin } from 'vite'

// /// <reference types="vite/client" />
// /// <reference types="node" />

// export default defineConfig({
//   plugins: [react(), splitVendorChunkPlugin()],
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           react: ['react', 'react-dom'],
//           charts: ['recharts', 'apexcharts'],
//           vendor: ['lodash', 'date-fns']
//         }
//       }
//     }
//   }
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true
  },
  preview: {
    port: 5173
  }
})














// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
