// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    'nuxt-icon',
  ],
  app: {
    head: {
      link: [
        {
          href: 'https://api.mapbox.com/mapbox-gl-js/v2.11.0/mapbox-gl.css',
          rel: 'stylesheet'
        }
      ]
    }
  },
  ssr: false,
  colorMode: {
    preference: 'pastel', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
});
