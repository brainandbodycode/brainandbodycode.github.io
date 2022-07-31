import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  // target: 'static',
  css: ['~/assets/css/semantic.scss', '~/assets/css/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/_variables.scss";',
        },
      },
    },
  },
  modules: ['@nuxt/content', '@nuxt/image-edge'],
  plugins: ['~/plugins/vue-gtag.client.js'],
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
    staticFilename: 'publicPath/imagejs/[name]-[hash][ext]',
    dir: 'public'
  }
})
