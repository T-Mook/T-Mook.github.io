<template>
  <v-row no-gutters>
    <v-col
      v-for="(item, index) in items"
      :key="index"
      cols="6"
      sm="4"
      class="child-flex"
      :order="reordering(index)"
    >
      <v-hover>
        <template #default="{ isHovering, props }">
          <!-- Start : Photo (Odd) -->
          <v-img
            v-if="index % 2 === 1"
            v-bind="props"
            id="photos-card-image"
            :src="item.src"
            width="100%"
            height="100%"
            aspect-ratio="1"
            cover
            class="grey lighten-2 photos-fill"
          >
            <template #placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5" />
              </v-row>
            </template>
            <v-fade-transition>
              <v-overlay v-if="isHovering" contained :color="item.color">
                <p class="text-subtitle-1" v-html="item.desc" />
              </v-overlay>
            </v-fade-transition>
          </v-img>

          <!-- Start : Color Board (Even)-->
          <v-card
            v-else
            v-bind="props"
            width="100%"
            height="100%"
            :color="item.color"
            dark
            tile
            flat
            class="d-flex justify-start align-center"
          >
            <v-fade-transition mode="out-in">
              <v-card-title v-if="!isHovering" key="text">
                <p class="text-subtitle-1" v-html="item.desc" />
              </v-card-title>

              <v-img
                v-else
                key="image"
                width="100%"
                height="100%"
                :src="item.src"
                aspect-ratio="1"
                cover
                class="photos-fill"
              >
                <template #placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5" />
                  </v-row>
                </template>
                <v-card-title>
                  <p
                    class="text-h3"
                    style="color: rgba(0, 0, 0, 0)"
                    v-html="item.alt"
                  />
                </v-card-title>
              </v-img>
            </v-fade-transition>

          </v-card>
        </template>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const { $vuetify } = useNuxtApp()

const items: Array<{
  src: string
  alt: string
  desc: string
  color: string
}> = [
  {
    src: '/photos/1.jpg',
    alt: '마이데이터 촬영 현장',
    desc: '다양한 활동들 <',
    color: '#9e9e9e',
  },
  {
    src: '/photos/2.jpg',
    alt: '메타버스 촬영 현장',
    desc: '메타버스 촬영 현장<br />(w. 김상균 교수님)',
    color: 'black',
  },
  {
    src: '/photos/3.jpg',
    alt: '판교의 젊은 기획자들 촬영',
    desc: '진행 역을 맡으며<br />직접 강연 가능 <',
    color: 'black',
  },
  {
    src: '/photos/4.jpg',
    alt: '삼성동 제이든 미디어에서',
    desc: '삼성동 제이든 미디어에서',
    color: 'black',
  },
  {
    src: '/photos/5.jpg',
    alt: '프로필 사진',
    desc: '스튜디오에서<br />빠른 임기응변 <',
    color: '#9e9e9e',
  },
  {
    src: '/photos/6.jpg',
    alt: '디지털 화폐 관련 촬영 현장',
    desc: '디지털 화폐 관련 촬영 현장',
    color: 'black',
  },
]

function reordering(index: number): number {
  return $vuetify.breakpoint.xsOnly && index === 2
    ? 3
    : $vuetify.breakpoint.xsOnly && index === 3
    ? 2
    : index
}
</script>

<style scoped>
#photos-card-image {
  filter: gray; /* IE6-9 */
  -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
  filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
}

/* Disable grayscale on hover */
#photos-card-image:hover {
  -webkit-filter: grayscale(0);
  filter: none;
}

.photos-fill :deep(.v-img__img),
.photos-fill :deep(.v-img__picture) {
  object-fit: cover;
}
</style>
