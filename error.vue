<template>
  <v-app>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </v-app>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  error: {
    statusCode?: number
  }
}>()

const pageNotFound = '존재하지 않는 페이지'
const otherError = '알 수 없는 에러'

const title = computed(() =>
  props.error.statusCode === 404 ? pageNotFound : otherError
)

useHead({
  title,
})
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
