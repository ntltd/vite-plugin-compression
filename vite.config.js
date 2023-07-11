import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import htmlPlugin from 'vite-plugin-html-config'
import { compression } from 'vite-plugin-compression2'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    htmlPlugin({
      title: 'Repro repo'
    }),
    compression({ deleteOriginalAssets: true })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, `./src`),
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: function manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('lodash')) {
              return 'lodash'
            }
            if (id.includes('leaflet')) {
              return 'leaflet'
            }
            return 'vendor'
          }
        }
      }
    }
  }
})
