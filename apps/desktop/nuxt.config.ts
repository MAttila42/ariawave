import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  alias: {
    "@ariawave": "../../package/main.ts"
  },
  devtools: {
    enabled: true,
  },
  ssr: false,
  modules: ['@unocss/nuxt'],
  vite: {
    clearScreen: false,
    server: {
      strictPort: true,
      fs: {
        cachedChecks: false
      }
    },
  },
})
