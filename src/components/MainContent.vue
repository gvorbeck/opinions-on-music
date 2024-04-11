<template>
  <section class="bg-sandyBrown bg-gradient-to-bl from-[#e4924f] to-sandyBrown card bevel-border">
    <header>{{ props.title }}</header>
    <ul>
      <li v-for="album in props.albums" :key="album.title">{{ album.title }}</li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { Album } from '@/data/definitions'

// Data
const props = defineProps<{ title: string; albums: Album[] | undefined }>()
</script>
background-color: #f4a261; background-image: linear-gradient(90deg, #f4a261 37%, #e4924f 100%);
