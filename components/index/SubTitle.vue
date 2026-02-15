<template>
  <v-row justify="center">
    <v-col cols="10" sm="4">
      <p
        class="text-center text-sm-h4 text-h4 font-weight-normal pb-0"
        v-html="items.title"
      />
      <p
        class="text-center text-md-h6 text-sm-subtitle-1 text-body-1 font-weight-light pb-0"
        v-html="items.content"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  parentItems: {
    title: string
    content: string
  }
}>()

const items = computed(() => props.parentItems)
</script>
