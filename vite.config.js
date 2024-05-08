//vite.config.js
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { VitePluginRadar } from 'vite-plugin-radar'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [preact(),
    VitePluginRadar({
      // Google Analytics tag injection
      analytics: {
        id: process.env.GOOGLE_ANALYTICS_ID || 'G-XXXXA',
      },
    })
  ],
  preview: {
    port: 3000,
    strictPort: true,
  }
})
