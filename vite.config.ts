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
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'vendor-react'
            }
            if (id.includes('lodash')) {
              return 'vendor-lodash'
            }
            return 'vendor'
          }
        }
      }
    }
  }
})














// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
