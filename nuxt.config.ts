import url from 'url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/image',
  ],
  devtools: { enabled: true },
  app: {
    rootId: 'app',
  },
  css: [
    '~/assets/theme.css',
    // REFACTOR: only load this on pages with maps
    `~/node_modules/leaflet/dist/leaflet.css`,
  ],
  alias: {
    types: url.fileURLToPath(new URL(`./types`, import.meta.url)),
  },
  compatibilityDate: '2024-11-01',
  nitro: {
    publicAssets: [
      {
        baseURL: `leaflet/img/`,
        dir: `../node_modules/leaflet/dist/images`,
      },
    ],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
