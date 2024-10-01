// nuxt.config.js
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxt/icon'],

  plugins: [
    '~/plugins/google-maps.js', // Daftarkan plugin Google Maps
  ],
});
