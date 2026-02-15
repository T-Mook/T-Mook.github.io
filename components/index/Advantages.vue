<template>
  <v-row>
    <v-col v-for="(item, index) in items" :key="index" cols="4" sm="2">
      <v-card
        :rounded="optionOfCards.rounded"
        flat
        outlined
        class="mb-2 mx-md-3 py-3 py-md-10 py-sm-4"
        :style="setGradient(item.number)"
      >
        <v-card-actions class="justify-center">
          <v-icon :size="optionOfCards.iconSize">
            {{ item.icon }}
          </v-icon>
        </v-card-actions>

        <v-card-title
          class="justify-center text-md-h4 font-weight-bold grey--text text--darken-3"
        >
          {{ String(item.number) + '%' }}
        </v-card-title>
      </v-card>

      <v-card-subtitle
        class="text-center text-sm-caption text-caption grey--text"
      >
        {{ item.title }}
      </v-card-subtitle>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const { $vuetify } = useNuxtApp()

const optionOfCards: {
  color: string
  rounded: string
  iconSize: number
} = {
  color: 'grey lighten-4',
  rounded: 'pill',
  iconSize: $vuetify.breakpoint.smAndUp
    ? $vuetify.breakpoint.width / 20
    : $vuetify.breakpoint.width / 10,
}

const items: Array<{ icon: string; number: number; title: string }> = [
  { icon: 'mdi-comment-text', number: 95, title: 'Speech' },
  { icon: 'mdi-file-powerpoint', number: 90, title: 'MS PowerPoint' },
  { icon: 'mdi-file-word', number: 75, title: 'MS Word' },
  { icon: 'mdi-language-python', number: 70, title: 'Python' },
  { icon: 'mdi-database', number: 70, title: 'SQL' },
  { icon: 'mdi-language-javascript', number: 65, title: 'JavaScript' },
]

function setGradient(percentage: number): string {
  const transformPercentage = `${100 - percentage}%`

  return (
    'background: linear-gradient(' +
    'to bottom, ' +
    `rgba(0, 0, 0, 0) ${transformPercentage}, ` +
    'rgba(0, 0, 0, 0.10) 0%)'
  )
}
</script>
