import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { VitePWA } from 'vite-plugin-pwa'


export default defineConfig({
  plugins: [vue(), VitePWA({
    includeAssets: ['img/icons/favicon-16x16.png', 'img/icons/apple-touch-icon-60x60.png'],  
    registerType: 'autoUpdate',
    manifest: {
      name: 'Vue Moviedatabase',
      short_name: 'Vue Moviedatabase',
      description: 'Search for your favorite movie or series',
      theme_color: '#2a303c',
      icons: [
        {
          src: 'img/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'img/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'img/icons/android-chrome-maskable-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        }
      ]
    }
  })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true,
  },
})
