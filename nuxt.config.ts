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
      htmlAttrs: { lang: 'fr' },
      title: 'Pizzeria Sian D\'Acqui — Saint-Roman-de-Bellet',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Pizzeria artisanale à Saint-Roman-de-Bellet. Pizzas au feu de bois avec des ingrédients frais et locaux.' },
        { property: 'og:site_name', content: 'Pizzeria Sian D\'Acqui' },
        { property: 'og:locale', content: 'fr_FR' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/images/icon_round_eagle_512.png' },
        { rel: 'icon', type: 'image/png', sizes: '256x256', href: '/images/icon_round_eagle_256.png' },
        { rel: 'icon', type: 'image/png', sizes: '128x128', href: '/images/icon_round_eagle_128.png' },
        { rel: 'apple-touch-icon', href: '/images/icon_round_eagle_256.png' },
        { rel: 'canonical', href: 'https://siandacqui.fr' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: ['~/assets/css/main.css'],
})
