<template>
  <div class="md:flex gap-4">
    <div
      class="aspect-square bg-charcoal bg-opacity-75 flex items-center px-4 rounded-md md:w-1/2 lg:w-1/3"
    >
      <IconTape class="w-full h-auto fill-white opacity-50" />
    </div>
    <div class="md:flex-1 lg:w-2/3 md:text-left">
      <p class="[&_span]:font-josefinSans [&_span]:font-bold [&_span]:uppercase">
        <span>{{ props.album.title }}</span> <em>by</em> <span>{{ props.album.artist }}</span>
      </p>
      <ul v-if="isLargeScreen">
        <li v-for="(value, key) in props.album.links" :key="value">
          <a :href="value" class="underline" target="_blank">{{ key }}</a>
        </li>
      </ul>
      <ul v-if="isLargeScreen" class="opacity-65 text-sm">
        <li v-for="genre in props.album.genres" :key="genre">{{ genre }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Album } from '@/data/definitions'
import IconTape from './icons/IconTape.vue'
import { onMounted, onUnmounted, ref } from 'vue'
// import { onMounted, watch, ref } from 'vue'

// Data
const props = defineProps<{ album: Album }>()
const isLargeScreen = ref(window.innerWidth >= 768)
const updateScreenSize = () => {
  isLargeScreen.value = window.innerWidth >= 768
}
// placeholder
// const albumData = ref()

// Watchers
// Watch for changes in data
// watch(albumData, () => {
//   console.log(albumData.value)
// })

// Lifecycle
// Dummy JSON API call
// onMounted(() => {
//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((response) => response.json())
//     .then((json) => (albumData.value = json))
// })

onMounted(() => {
  window.addEventListener('resize', updateScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize)
})
</script>
