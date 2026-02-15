interface VuetifyBreakpointBridge {
  width: number
  xsOnly: boolean
  smOnly: boolean
  smAndUp: boolean
  mdAndUp: boolean
  lgAndUp: boolean
}

interface VuetifyBridge {
  breakpoint: VuetifyBreakpointBridge
}

declare module '#app' {
  interface NuxtApp {
    $vuetify: VuetifyBridge
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $vuetify: VuetifyBridge
  }
}

export {}
