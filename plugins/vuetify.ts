import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#2962ff',
            secondary: '#fdd835',
            accent: '#0d47a1',
            info: '#26a69a',
            warning: '#ffc107',
            error: '#ff3d00',
            success: '#00c853',
          },
        },
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)

  const display = vuetify.display
  const vuetifyBridge = {
    breakpoint: {
      get width() {
        return display.width.value
      },
      get xsOnly() {
        return display.xs.value
      },
      get smOnly() {
        return display.sm.value
      },
      get smAndUp() {
        return display.smAndUp.value
      },
      get mdAndUp() {
        return display.mdAndUp.value
      },
      get lgAndUp() {
        return display.lgAndUp.value
      },
    },
  }

  nuxtApp.provide('vuetify', vuetifyBridge)
})
