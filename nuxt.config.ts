import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/css/semantic.css', '~/assets/css/main.scss'],
  modules: ['@nuxt/content'],
})
