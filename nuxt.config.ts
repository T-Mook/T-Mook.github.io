export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  css: ['@mdi/font/css/materialdesignicons.css'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  dir: {
    public: 'static',
  },
  app: {
    head: {
      title: '박성묵 - 소개 페이지',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            '경제&#183;금융 및 IT 트렌드 용어 강사 활동을 하고 있으며 작가입니다. 전략/기획, 데이터 분석 및 웹 개발 경험을 가졌고 증권사 및 IT스타트업 경력을 보유하고 있습니다.',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: '//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css',
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      script: [
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=UA-121779163-2',
        },
        {
          children:
            "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','UA-121779163-2');",
        },
      ],
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
  },
})
