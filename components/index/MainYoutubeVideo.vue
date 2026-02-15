<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-carousel
        cycle
        interval="8000"
        show-arrows-on-hover
        hide-delimiters
        touch
        :height="responsiveHeight"
      >
        <v-carousel-item v-for="(videoInfo, index) in videoInfos" :key="index">
          <v-sheet height="100%" tile>
            <v-row
              class="fill-height"
              align="center"
              justify="center"
              :no-gutters="$vuetify.breakpoint.xsOnly"
            >
              <v-col
                v-for="(video, childIndex) in videoInfo"
                :key="childIndex"
                cols="6"
                sm="4"
              >
                <div class="d-flex justify-center mb-2">
                  <iframe
                    :width="responsiveWidth"
                    :height="responsiveHeight"
                    :src="`https://www.youtube.com/embed/${video.vid}`"
                    :title="video.desc"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  />
                </div>
                <p class="text-caption text-center">
                  {{ video.desc }}
                </p>
              </v-col>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { $vuetify } = useNuxtApp()

const videoInfos: Array<Array<{ vid: string; desc: string }>> = [
  [
    { vid: '662wnupQ8fg', desc: '블록체인' },
    { vid: 'QzrIBsod1_A', desc: '딥러닝' },
    { vid: 'bEdfc5tdi7c', desc: '통화스왑' },
  ],
  [
    { vid: 'm_4JyZGoVCQ', desc: '클라우드 컴퓨팅' },
    { vid: 'Nazn65-z6VQ', desc: '롤오버 효과' },
    { vid: 'rrFVn3AYpzw', desc: '채권' },
  ],
  [
    { vid: 'SGTNcrjCrS8', desc: '그래픽처리장치(GPU)' },
    { vid: 'e9v6ST9oTB0', desc: '디지털 트윈' },
    { vid: 'E36MpUg5M54', desc: '다크웹' },
  ],
]

const responsiveWidth = computed(() => {
  const currentWidth = $vuetify.breakpoint.lgAndUp
    ? 1264
    : $vuetify.breakpoint.width
  const dividNumber = $vuetify.breakpoint.xsOnly ? 2 : 3
  const minusNumber = $vuetify.breakpoint.xsOnly ? 8 : 16

  return currentWidth / dividNumber - minusNumber
})

const responsiveHeight = computed(() => (responsiveWidth.value / 16) * 9)
</script>
