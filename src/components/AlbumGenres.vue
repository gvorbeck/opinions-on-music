<template>
  <ul class="opacity-65 text-sm">
    <li v-for="genre in props.genres" :key="genre">{{ genre }}</li>
  </ul>
</template>

<script lang="ts" setup>
import type { Album } from '@/data/definitions'

const props = defineProps<{ genres: Album['genres'] }>()
</script>
