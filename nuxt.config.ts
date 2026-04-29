// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    families: {
      'Playfair+Display': [400, 500, 700, 900],
      'Lato': [300, 400, 700],
    },
    display: 'swap',
    preload: true,
  },

  app: {
    head: {
      title: 'Pizzeria Sian D\'Acqui — Saint-Roman-de-Bellet',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Pizzeria artisanale à Saint-Roman-de-Bellet. Pizzas au feu de bois avec des ingrédients frais et locaux.' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: ['~/assets/css/main.css'],
})
