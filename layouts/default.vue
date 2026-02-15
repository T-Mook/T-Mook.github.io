<template>
  <v-app>
    <v-sheet :color="color">
      <v-container fluid>
        <v-row justify="center">
          <v-sheet :max-width="maxWidth">
            <slot />
          </v-sheet>
        </v-row>
      </v-container>
    </v-sheet>
  </v-app>
</template>

<script setup lang="ts">
const color = 'grey-lighten-4'
const maxWidth = 1264
</script>
