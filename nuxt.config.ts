import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '박성묵 - 소개 페이지',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '경제&#183;금융 및 IT 트렌드 용어 강사 활동을 하고 있으며 작가입니다. 전략/기획, 데이터 분석 및 웹 개발 경험을 가졌고 증권사 및 IT스타트업 경력을 보유하고 있습니다.',
      },
    ],
    link: [
      /* How to use Web Font (Spoka Sans) in Nuxt
      ref: https://ichi.pro/ko/vuetify-js-mich-nuxt-jseseo-gibon-geulkkol-byeongyeong-62212184407824
      ref2 (font Official): https://spoqa.github.io/spoqa-han-sans/ko-KR/
      */
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // ref : https://github.com/kaorun343/vue-youtube-embed/issues/44
    { src: '@/plugins/youtube.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // ref : https://google-analytics.nuxtjs.org/setup
    '@nuxtjs/google-analytics',
    // ref : https://typescript.nuxtjs.org/guide/setup
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Modules: https://google-analytics.nuxtjs.org/
  googleAnalytics: {
    id: 'UA-121779163-2',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blue.accent3,
          accent: colors.blue.accent4,
          secondary: colors.yellow.lighten1,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        dark: {
          primary: colors.blue.accent3,
          accent: colors.blue.accent4,
          secondary: colors.yellow.lighten1,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-youtube-embed'],
  },
}
