import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
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
  buildModules: [
    '@nuxt/image-edge',
  ],
  modules: ['@nuxt/content'],
  plugins: ['~/plugins/vue-gtag.client.js'],
})
