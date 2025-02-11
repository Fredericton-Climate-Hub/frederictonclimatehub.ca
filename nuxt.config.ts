import url from "url"
import tailwindConfig from "./tailwind.config"

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
  runtimeConfig: {
    public: {
      contact: {
        email: 'info@example.com',
        phone: '555-123-4567',
      },
    },
  },
  alias: {
    types: url.fileURLToPath(new URL(`./types`, import.meta.url)),
  },
  compatibilityDate: '2025-02-10',
  nitro: {
    prerender: {
      routes: [`/`],
    },
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
  image: {
    screens: Object.fromEntries(Object
      .entries(tailwindConfig.theme.screens)
      .map(([screen, size]) => [screen, parseInt(size.replace(/px$/, ''))])),
  },
})
