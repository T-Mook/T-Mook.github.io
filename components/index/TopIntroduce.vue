<template>
  <v-row id="top-introduce-row" align="center" justify="center" no-gutters>
    <!-- ### Start : column 1 ### -->
    <v-col
      id="top-introduce-col-1"
      cols="12"
      :sm="otherColsThanCenter"
      :order="reordering(0)"
      class="fill-height side-col side-col-left"
    >
      <v-container fluid class="fill-height px-0">
        <div class="info-stack" :style="{ height: `${heightOfCols}px` }">
          <v-sheet
            v-for="(item, index) in leftItems"
            :key="index"
            class="info-item"
            color="transparent"
          >
            <v-card-subtitle class="pb-0 px-0">
              <p :class="leftInfosOption.class.title" v-html="item.title" />
            </v-card-subtitle>

            <v-card-title class="px-0">
              <p :class="leftInfosOption.class.content" v-html="item.content" />
            </v-card-title>

            <v-card-actions v-if="index === 2" class="pt-0 px-0">
              <v-btn
                v-for="(linkBtn, btnIndex) in linkBtns"
                :key="btnIndex"
                :href="linkBtn.url"
                icon
                target="_blank"
              >
                <v-icon>{{ linkBtn.icon }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-sheet>
        </div>
      </v-container>
    </v-col>

    <!-- ### Start : column 2 ### -->
    <v-col
      id="top-introduce-col-2"
      cols="12"
      :sm="centerCols"
      :order="reordering(1)"
      class="fill-height"
    >
      <v-card rounded="pill" outlined class="center-image-shell pa-4 pa-sm-8 pa-md-4">
        <v-card rounded="pill" outlined>
          <v-img
            :id="$vuetify.breakpoint.mdAndUp ? 'top-image' : 'top-image-color'"
            :src="profilePhoto"
            :aspect-ratio="aspectRatioOfImg"
          >
            <!-- Start : Loading Template -->
            <template #placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5" />
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-card>
    </v-col>

    <!-- ### Start : column 1 ### -->
    <v-col
      id="top-introduce-col-3"
      cols="12"
      :sm="otherColsThanCenter"
      :order="reordering(2)"
      class="fill-height side-col side-col-right"
    >
      <v-container fluid class="fill-height px-0">
        <div class="info-stack info-stack-right" :style="{ height: `${heightOfCols}px` }">
          <v-sheet
            v-for="(item, index) in rightItems"
            :key="index"
            class="info-item"
            color="transparent"
          >
            <v-card-subtitle class="d-flex justify-end pb-0 px-0 text-right">
              <p :class="rightInfosOption.class.title" v-html="item.title" />
            </v-card-subtitle>

            <v-card-title class="d-flex justify-end px-0 text-right">
              <p
                :class="rightInfosOption.class.content"
                v-html="item.content"
              />
            </v-card-title>
          </v-sheet>
        </div>
      </v-container>
    </v-col>

    <!-- ### Start : Empty columns (for smOnly) ### -->
    <v-col
      v-if="$vuetify.breakpoint.smOnly"
      id="top-introduce-empty-col0"
      sm="2"
      order="0"
      class="fill-height"
    />
    <v-col
      v-if="$vuetify.breakpoint.smOnly"
      id="top-introduce-empty-col1"
      sm="2"
      order="2"
      class="fill-height"
    />
  </v-row>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { $vuetify } = useNuxtApp()

const profilePhoto = '/index/top_image.jpg'
const aspectRatioOfImg = 67 / 100

const centerCols = computed(() => ($vuetify.breakpoint.mdAndUp ? 4 : 8))

const heightOfCols = computed(() =>
  $vuetify.breakpoint.mdAndUp
    ? ($vuetify.breakpoint.width / 3 / 5) * 5
    : $vuetify.breakpoint.smOnly
    ? ($vuetify.breakpoint.width / 3 / 5) * 9.5
    : ($vuetify.breakpoint.width / 3 / 5) * 18
)

const leftInfosOption: {
  class: {
    title: string
    content: string
  }
} = {
  class: {
    title: 'text-sm-body-2 text-overline grey--text mb-0',
    content:
      'text-sm-body-1 text-body-2 font-weight-normal grey--text text--darken-3',
  },
}

const rightInfosOption: {
  class: {
    title: string
    content: string
  }
} = {
  class: {
    title: 'text-sm-body-2 text-overline grey--text mb-0',
    content: 'text-sm-h5 text-md-h4 text-h6 font-weight-medium',
  },
}

const leftItems: Array<{ title: string; content: string }> = [
  {
    title: '경력',
    content:
      '(주)게타 CEO & Developer' +
      '<br />IT, 블록체인 기초 개념 저서 2권' +
      '<br />(전) 유안타증권 Retail전략팀 & PB',
  },
  {
    title: '주요 역량',
    content:
      'GPT 기능 개발 (Prompt Engineering)' +
      '<br />웹서비스 개발 (Cloud Native)' +
      '<br />경제&#183;금융&#183;IT 분야 강의 & 발표' +
      '<br />영업 전략 기획 및 데이터 분석' +
      '<br />Python, JavaScript, SQL',
  },
  { title: 'contact', content: 'msp770@gmail.com' },
]

const rightItems: Array<{ title: string; content: string }> = [
  { title: '총 경력(년)', content: '7' },
  { title: '시청된 강의 시간', content: '176,000' },
  { title: '경제/금융/IT 영상 수', content: '492' },
  { title: 'Github Contribution (2022)', content: '1,917' },
]

const linkBtns: Array<{ url: string; color: string; icon: string }> = [
  {
    url: 'https://www.youtube.com/c/TMook',
    color: 'black',
    icon: 'mdi-youtube',
  },
  {
    url: 'https://www.linkedin.com/in/mook-t-34a0a2135/',
    color: 'black',
    icon: 'mdi-linkedin',
  },
]

const otherColsThanCenter = computed(() => {
  if ($vuetify.breakpoint.mdAndUp) {
    return (12 - centerCols.value) / 2
  }

  if ($vuetify.breakpoint.smOnly) {
    return 5
  }

  return 8
})

function reordering(idx: number): number {
  if ($vuetify.breakpoint.smOnly) {
    return idx === 0 ? 3 : idx === 1 ? 1 : 4
  }

  if ($vuetify.breakpoint.xsOnly) {
    return idx === 0 ? 1 : idx === 1 ? 0 : 2
  }

  return idx
}
</script>

<style scoped>
.info-stack {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.info-stack-right {
  align-items: flex-end;
}

.info-item {
  width: 100%;
}

.info-stack-right .info-item {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.side-col {
  padding-left: 0;
  padding-right: 0;
}

#top-introduce-col-1,
#top-introduce-col-3 {
  display: flex;
}

#top-introduce-col-1 {
  justify-content: flex-start;
}

#top-introduce-col-3 {
  justify-content: flex-end;
}

#top-introduce-col-2 {
  display: flex;
  justify-content: center;
}

.center-image-shell {
  width: 100%;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.side-col :deep(p) {
  margin: 0;
}

.side-col-right {
  text-align: right;
}

.side-col-right :deep(.v-card-subtitle),
.side-col-right :deep(.v-card-title),
.side-col-right :deep(.v-card-actions) {
  justify-content: flex-end;
  text-align: right;
  width: 100%;
}

#top-image {
  filter: gray; /* IE6-9 */
  -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
  filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
}

/* Disable grayscale on hover */
#top-image:hover {
  -webkit-filter: grayscale(0);
  filter: none;
}

@media (max-width: 959px) {
  .side-col {
    padding-left: 12px;
    padding-right: 12px;
  }
}
</style>
