<template>
  <section class="bg-sandyBrown bg-gradient-to-bl from-[#e4924f] to-sandyBrown card bevel-border">
    <p v-if="sortedAlbums.length === 0">No albums for this year.</p>
    <ul class="flex flex-col gap-4" v-else>
      <li v-for="album in sortedAlbums" :key="album.title">
        <AlbumItem :album="album" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { Album } from '@/data/definitions'
import AlbumItem from './AlbumItem.vue'
import { computed } from 'vue'

// Data
const props = defineProps<{ title: string; albums: Album[] | undefined }>()

// Computed Properties
const sortedAlbums = computed(() => {
  return props.albums ? [...props.albums].sort((a, b) => a.title.localeCompare(b.title)) : []
})
</script>
