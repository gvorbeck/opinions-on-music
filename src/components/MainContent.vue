<template>
  <section class="bg-sandyBrown bg-gradient-to-bl from-[#e4924f] to-sandyBrown card bevel-border">
    <p v-if="sortedAlbums.length === 0">No albums for this year.</p>
    <div v-else>
      <div v-if="props.albumPlaylistLink">
        <a :href="props.albumPlaylistLink" target="_blank" class="flex gap-2 items-center"
          ><IconSpotify class="w-6 fill-persianGreen bg-charcoal p-1 rounded-full" />Playlist</a
        >
        <hr class="my-4" />
      </div>
      <ul class="flex flex-col gap-4">
        <li v-for="album in sortedAlbums" :key="album.title">
          <AlbumItem :album="album" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Album } from '@/data/definitions'
import AlbumItem from './AlbumItem.vue'
import { computed } from 'vue'
import IconSpotify from './icons/IconSpotify.vue'

// Data
const props = defineProps<{ albums: Album[] | undefined; albumPlaylistLink: string | undefined }>()

// Computed Properties
const sortedAlbums = computed(() => {
  return props.albums ? [...props.albums].sort((a, b) => a.title.localeCompare(b.title)) : []
})
</script>
