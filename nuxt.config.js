// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
import colors from 'vuetify/lib/util/colors'
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/outf-web/',
        },
      }
    : {}
const faviconPath =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? '/outh-web/favicon.ico'
    : '/favicon.ico'

export default {
  ...routerBase,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - OUTF',
    title: 'OUTF',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'OUTF' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'nuxtjs,web',
      },

      { hid: 'og:site_name', property: 'og:site_name', content: 'OUTF' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://gdsc-osaka.github.io/gonuxt/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'OUTF - Web Site of OUTF',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'OUTF',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://gdsc-osaka.github.io/v.png',
      },

      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@GDSC_osaka' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: faviconPath }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/gonuxt/components/atoms/',
      '~/gonuxt/components/molecules',
      '~/gonuxt/components/organisms',
      '~/components',
      '~/sections/',
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@/modules/custom-generate.js'],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/styles/app.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#353d9d',
          accent: '#9d359d',          
          secondary: '#676c72',
          info: colors.teal.lighten1,
          warning: '#fbbc04',
          error: colors.deepOrange.accent4,
          success: '#359d41'
        }
      },
      options: {
        customProperties: true
      }
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
