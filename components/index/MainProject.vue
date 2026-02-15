<template>
  <v-row justify="center" no-gutters>
    <v-col
      v-for="(project, index) in projects"
      :key="index"
      cols="12"
      md="6"
      class="project-col"
    >
      <v-card flat tile>
        <v-img
          :src="project.src"
          :gradient="project.color.backgroundGradient"
          :height="heightInXS"
          cover
          class="project-image"
        >
          <div class="project-overlay">
            <p class="project-subtitle">
              {{ project.text.subtitle }}
            </p>
            <p class="project-title">
              {{ project.text.title }}
            </p>
            <p class="project-content" v-html="project.text.content" />
            <v-btn
              variant="outlined"
              rounded="pill"
              :size="$vuetify.breakpoint.xsOnly ? 'small' : 'default'"
              :color="project.btn.color"
              :href="project.btn.href"
              class="mt-6 project-btn"
            >
              {{ project.btn.name }}
            </v-btn>
          </div>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { $vuetify } = useNuxtApp()

const projects: Array<{
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
}> = [
  {
    text: {
      subtitle: '「만개동화」 아이를 위한 맞춤 동화책 제작·구매',
      title: '아이 사진, 이야기 담은 동화책 선물',
      content:
        '특별한 날 선물하기 좋은 동화책으로 제작되어 ' +
        '집으로 받아볼 수 있어요. #생일선물 #출산선물 #돌 #두돌 #성장동화 #성장앨범',
    },
    color: {
      backgroundGradient: 'to left, rgba(0, 0, 0,.7), rgba(0,0,0,1)',
    },
    src: '/background/office-1209640_1920.jpg',
    btn: {
      name: '바로가기 ▶',
      href: 'https://bloomingtales.io',
      color: 'grey-lighten-2',
    },
  },
  {
    text: {
      subtitle: '「TMook」 - Youtube Channel',
      title: 'IT/금융/경제 설명 쉽게 듣고 보세요',
      content:
        '실시간 소통 또는 편집영상을 통해 관심있는, 또는 화제의 어려운 용어들을 다룹니다.',
    },
    color: {
      backgroundGradient: 'to left bottom, rgba(0,0,0,1), rgba(0,0,0,.3)',
    },
    src: '/background/radio-2722271_1920.jpg',
    btn: {
      name: 'Youtube ▶',
      href: 'https://youtube.com/c/TMook',
      color: 'grey-lighten-2',
    },
  },
]

const heightInXS = computed(() => ($vuetify.breakpoint.xsOnly ? 620 : 400))
</script>

<style scoped>
.project-col {
  padding: 0;
}

.project-image :deep(.v-img__img) {
  z-index: 0;
}

.project-image :deep(.v-img__gradient) {
  z-index: 1;
}

.project-image :deep(.v-responsive__content) {
  position: relative;
  z-index: 2;
}

.project-overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  padding: 2rem 1.75rem 2rem 1rem;
  color: #f0f0f0;
}

.project-subtitle {
  margin: 0 0 0.7rem;
  font-size: clamp(1.2rem, 1.45vw, 1.55rem);
  font-weight: 500;
  line-height: 1.35;
  color: #d6d6d6;
}

.project-title {
  margin: 0 0 0.9rem;
  font-size: clamp(1.9rem, 2.35vw, 2.35rem);
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.18;
  color: #fff;
}

.project-content {
  margin: 0;
  font-size: clamp(0.95rem, 0.95vw, 1.05rem);
  font-weight: 400;
  line-height: 1.5;
  color: #d9d9d9;
}

.project-btn {
  width: fit-content;
  min-height: 2.25rem;
  padding: 0 1.15rem;
  border-color: rgba(255, 255, 255, 0.8) !important;
  color: #f2f2f2 !important;
  letter-spacing: 0.02em;
  font-size: 1rem;
  font-weight: 500;
  text-transform: none;
}

@media (max-width: 600px) {
  .project-col {
    padding-left: 12px;
    padding-right: 12px;
  }

  .project-col + .project-col {
    margin-top: 12px;
  }

  .project-overlay {
    padding: 1.5rem 1rem;
  }

  .project-subtitle {
    font-size: 1.2rem;
  }

  .project-title {
    font-size: 2rem;
  }

  .project-content {
    font-size: 0.95rem;
  }

  .project-btn {
    font-size: 0.9rem;
  }
}
</style>
