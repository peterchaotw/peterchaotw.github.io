import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindConfig from './tailwind.config';
import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {},
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        navigateFallback: undefined,
      },
      includeAssets: ['logo.png'],
      manifest: {
        name: 'Portfolio',
        short_name: 'Portfolio',
        description: 'Personal Portfolio',
        icons: [
          {
            src: 'logo.png',
            sizes: '64x64 32x32 24x24 16x16 192x192 512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwind(tailwindConfig), autoprefixer],
    },
  },
});
