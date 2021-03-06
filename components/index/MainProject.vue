<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0.5,
    }"
    min-height="200"
    transition="fade-transition"
  >
    <v-card :width="width" flat tile>
      <p class="main-title d-flex justify-center mb-8 px-6" v-html="title" />

      <v-img
        v-for="(project, index) in projects"
        :key="index"
        :src="project.src"
        :gradient="project.color.backgroundGradient"
        :height="heightInXS"
        :contain="containInXS"
        class="align-center"
      >
        <v-card-subtitle class="project-subtitle">
          {{ project.text.subtitle }}
        </v-card-subtitle>

        <v-card-title class="project-title">
          {{ project.text.title }}
        </v-card-title>

        <v-card-text
          class="project-content white--text"
          v-html="project.text.content"
        />

        <v-btn
          outlined
          depressed
          :color="project.btn.color"
          :href="project.btn.href"
          class="mt-6 ml-5"
        >
          {{ project.btn.name }}
        </v-btn>
      </v-img>
    </v-card>
  </v-lazy>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'

@Component({
  computed: {
    heightInXS(): number | undefined {
      const height = this.$vuetify.breakpoint.xsOnly ? 500 : 400
      return height
    },
    containInXS(): boolean {
      const contain = false
      return contain
    },
  },
})
class ComponentsIndexMainProject extends Vue {
  @Provide() title: string = '주요 진행 프로젝트'
  @Provide() isActive: boolean = false
  @Provide() width: string = '100%'
  @Provide() projects: Array<{
    text: {
      subtitle: string
      title: string
      content: string
    }
    color: {
      backgroundGradient: string
    }
    src: string
    btn: {
      name: string
      href: string | undefined
      color: string
    }
    cardClass: string
  }> = [
    {
      text: {
        subtitle: '「EASYXPLAIN」 - Web Service',
        title: '쉬운 설명을 제공하거나, 얻으세요',
        content:
          "사람들이 작성하는 용어 설명 및 가이드, 이곳에서 그 평가기준은 오직 '쉽다'는 것. " +
          '<br>쉽게 설명하는 능력을 인정받는 공간이기도 합니다',
      },
      color: {
        backgroundGradient:
          'to left bottom, rgba(30,36,77,.8), rgba(30,36,77,1)',
      },
      src: '/background/office-1209640_1920.jpg',
      btn: {
        name: '서비스 소개 ▶',
        href: 'https://knowease-inc.github.io/service/easyxplain/introduce',
        color: 'blue lighten-4',
      },
      cardClass: 'align-center',
    },
    {
      text: {
        subtitle: '「TMook」 - Youtube Channel',
        title: '금융/경제/IT 설명 쉽게 듣고 보세요',
        content:
          '실시간 소통 또는 편집영상을 통해 관심있는, 또는 화제의 어려운 용어들을 다룹니다. ' +
          '<br>매주 수요일 저녁 9시 LIVE 진행됩니다',
      },
      color: {
        backgroundGradient:
          'to left bottom, rgba(11,12,23,1), rgba(11,12,23,.6)',
      },
      src: '/background/radio-2722271_1920.jpg',
      btn: {
        name: 'Youtube ▶',
        href: 'https://youtube.com/c/TMook',
        color: 'red lighten-2',
      },
      cardClass: 'justify-end align-center',
    },
  ]
}

export default ComponentsIndexMainProject
</script>

<style scoped>
.main-title {
  font-size: 1.6rem !important;
  font-weight: 500;
}
.project-subtitle {
  font-size: 1.1rem !important;
  font-weight: 400;
  padding-bottom: 10px;
  color: rgba(235, 235, 235, 1) !important;
}
.project-title {
  font-size: 1.5rem !important;
  padding-top: 0px;
  font-weight: 500;
  color: white !important;
}
.project-content {
  font-size: 0.9rem !important;
  font-weight: 300;
}
</style>
