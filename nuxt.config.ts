// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      wpApiBaseUrl: process.env.WP_API_BASE_URL || 'https://default-url.com/wp-json/wp/v2/'
    }
  },
  ssr: true,
  nitro: {
    prerender: {
      routes: async () => {
        const response = await fetch('https://dev-midlaj.pantheonsite.io/wp-json/wp/v2/posts')
        const posts = await response.json()
        return posts.map((post: any) => `/blog/${post.slug}`)
      }
    },
  },
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      script: [
        {
          src: 'https://cloud.umami.is/script.js',
          defer: true,
          'data-website-id': 'e2759eea-c1c1-417c-a99e-7deaf62f4b4c'
        }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://api.fontshare.com/v2/css?f[]=general-sans@200,300,400,500,600,700&display=swap' }, 
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap'},

        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark'
},
plugins: [
  '~/plugins/dateFormatter.js'
]
})