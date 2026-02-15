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
      title: 'AI 시대 적응 강의 | 직장인·부모를 위한 실전 전략',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'AI 시대 생존을 위한 실전 교육. 직장인을 위한 업무 스킬과 학습 전략, 부모를 위한 자녀교육 방법을 강의와 콘텐츠로 제공합니다.',
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
