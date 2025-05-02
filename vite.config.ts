import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/// <reference types="vite/client" />
/// <reference types="node" />

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
