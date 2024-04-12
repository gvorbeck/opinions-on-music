<template>
  <div class="md:flex gap-4">
    <div
      class="aspect-square bg-charcoal bg-opacity-75 flex items-center px-4 rounded-md md:w-1/2 lg:w-1/3"
    >
      <img :src="albumCover" alt="Album cover" />
      <!-- <IconTape class="w-full h-auto fill-white opacity-50" v-else /> -->
    </div>
    <div class="md:flex-1 lg:w-2/3 md:text-left lg:flex lg:flex-col lg:gap-2">
      <AlbumTitle :title="props.album.title" :artist="props.album.artist" />
      <AlbumLinks
        :links="props.album.links"
        v-if="isMediumScreen && !!Object.keys(props.album.links).length"
      />
      <AlbumFavTrack
        v-if="isMediumScreen && !!props.album.favoriteTrack"
        :track="props.album.favoriteTrack"
      />
      <AlbumGenres
        v-if="isMediumScreen && !!props.album.genres?.length"
        :genres="props.album.genres"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Album } from '@/data/definitions'
import IconTape from './icons/IconTape.vue'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import AlbumTitle from './AlbumTitle.vue'
import AlbumLinks from './AlbumLinks.vue'
import AlbumFavTrack from './AlbumFavTrack.vue'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config' // I don't know why this error is here.
import AlbumGenres from './AlbumGenres.vue'

// Data
const props = defineProps<{ album: Album }>()
const fullConfig = resolveConfig(tailwindConfig)
const isLargeScreen = ref(window.innerWidth >= parseInt(fullConfig.theme.screens.lg))
const isMediumScreen = ref(window.innerWidth >= parseInt(fullConfig.theme.screens.md))
const updateScreenSize = () => {
  isLargeScreen.value = window.innerWidth >= parseInt(fullConfig.theme.screens.lg)
  isMediumScreen.value = window.innerWidth >= parseInt(fullConfig.theme.screens.md)
}
const albumData = ref()
const albumCover = ref()

// Watchers
// Watch for changes in data
watch(albumData, () => {
  console.log(albumData?.value?.album.image[4]['#text'])
  albumCover.value = albumData?.value?.album.image[4]['#text']
})

// Lifecycle
// Dummy JSON API call
onMounted(() => {
  fetch(
    'https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=6a163345d35cda2e6eefb42202119d35&artist=' +
      props.album.artist +
      '&album=' +
      props.album.title +
      '&format=json'
  )
    .then((response) => response.json())
    .then((json) => (albumData.value = json))
    .catch((error) => console.error(error))
})

onMounted(() => {
  window.addEventListener('resize', updateScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize)
})
</script>
