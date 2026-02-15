<template>
  <v-row>
    <v-col v-for="(item, index) in items" :key="index" :cols="cols">
      <v-card flat tile>
        <v-card-title
          :class="index !== 1 ? classOfTop : classOfTopXsOnlyJustifyEnd"
          v-html="item.title"
        />
      </v-card>
      <v-card
        v-for="(content, cindex) in item.contents"
        :key="cindex"
        flat
        tile
      >
        <v-card-title
          :class="
            index !== 1 ? classOfText.title : classOfTextXsOnlyJustifyEnd.title
          "
          v-html="content.title"
        />
        <v-card-text
          :class="
            index !== 4
              ? classOfText.description
              : classOfTextXsOnlyJustifyEnd.description
          "
          v-html="content.description"
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const { $vuetify } = useNuxtApp()

const cols = $vuetify.breakpoint.xsOnly ? 12 : 4

const classOfTop = 'text-md-subtitle-2 text-sm-overline text-overline grey--text'

const classOfText: {
  title: string
  description: string
} = {
  title: 'text-md-h6 text-sm-body-1 text-body-2 font-weight-normal',
  description:
    'text-md-subtitle-1 text-caption font-weight-light grey--text text--darken-2',
}

const classOfTopXsOnlyJustifyEnd =
  'd-flex justify-end justify-sm-start text-md-subtitle-2 text-sm-overline text-overline grey--text'

const classOfTextXsOnlyJustifyEnd: {
  title: string
  description: string
} = {
  title:
    'd-flex justify-end justify-sm-start text-sm-left text-right text-md-h6 text-sm-body-1 text-body-2 font-weight-normal',
  description:
    'd-flex justify-end justify-sm-start text-sm-left text-right text-caption font-weight-light grey--text text--darken-2',
}

const items: Array<{
  title: string
  contents: Array<{ title: string; description: string }>
}> = [
  {
    title: '정보기술(IT)',
    contents: [
      {
        title: "중앙대 산학협력 'AI' 과목 SME",
        description: '2024 에프앤이노에듀 주관',
      },
      {
        title: "'만화로 보는 IT강의' SME",
        description: '2023 현대C&R 주관',
      },
      {
        title: '『디지털 시대에 살아남는 IT 지식』 집필',
        description: '2021 정보문화사 출간',
      },
    ],
  },
  {
    title: '경제&#183;금융',
    contents: [
      {
        title: '주간 IT&#183;금융 LIVE 방송',
        description: '2021-2024 Youtube',
      },
      {
        title: '「해외투자 따라잡기」 출연',
        description: '2014-2015 매일경제TV',
      },
      { title: '중국 투자전문가 담당', description: '2014-2015 유안타증권' },
    ],
  },
  {
    title: '그 외',
    contents: [
      {
        title: "2025 테슬라로 보는 경영 인사이트",
        description: '2025 현대C&R 주관',
      },
      {
        title: '『디지털 화폐의 유형과 원리』 진행',
        description: '2021 케이브레인 제작',
      },
      {
        title: '『블록체인의 이해와 창업』 SME',
        description: '2019 창업진흥원 주관',
      },
      {
        title: '『보면 아는 블록체인』 집필',
        description: '2018 정보문화사 출간',
      },
    ],
  },
]
</script>
