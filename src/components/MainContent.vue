<template>
  <v-sheet :elevation="5">
    <v-toolbar :title="props.title"></v-toolbar>
    hello
  </v-sheet>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string }>()
</script>
