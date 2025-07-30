import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Peak Scrivening',
        short_name: 'PeakScrivening',
        description: 'A collection of 366 joke-writing tips shared by comedian Gary Gulman throughout 2019.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#4A6FA5',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'icons/maskable-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'icons/maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
        screenshots: [
          {
            src: 'screenshots/desktop-1280x720.png',
            sizes: '1280x720',
            type: 'image/png',
            form_factor: 'wide',
          },
          {
            src: 'screenshots/mobile-375x667.png',
            sizes: '375x667',
            type: 'image/png',
            // no form_factor here → covers mobile
          },
        ],
      },
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  publicDir: 'public',
  // Ensure static files are copied to build output
  assetsInclude: ['robots.txt'],
})
