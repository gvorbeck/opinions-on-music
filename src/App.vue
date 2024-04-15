<template>
  <div
    class="fixed w-12 aspect-square bg-charcoal rounded-md bottom-10 right-10 flex items-center justify-center transition-opacity duration-300 shadow-lg"
    :class="{
      'opacity-100': scrollY > 0 ? true : false,
      'opacity-0': scrollY === 0 ? true : false
    }"
  >
    <button
      class="material-symbols-outlined text-persianGreen block w-full h-full"
      title="Scroll to top"
      @click="scrollToTop"
    >
      arrow_upward
    </button>
  </div>
  <div class="flex flex-col gap-4 py-4 max-w-[1200px] mx-auto px-4">
    <div class="hidden-md-and-up"><SiteHeader /></div>
    <div class="grid grid-cols-12 gap-4">
      <aside class="col-span-full md:col-span-3 lg:col-span-2">
        <SidebarMenu :albums="albums" :activeYear="activeYear" @select-year="selectYear" />
      </aside>
      <main class="col-span-full md:col-span-9 lg:col-span-10">
        <MainContent :albums="activeYearAlbums" :albumPlaylistLink="albumPlaylistLink" />
      </main>
    </div>
    <div>
      <SiteFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onUnmounted, ref, watch } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import SidebarMenu from './components/SidebarMenu.vue'
import MainContent from './components/MainContent.vue'
import albums from './data/albums.json'

// Data
const activeYear = ref(albums[0].year)
const activeYearAlbums = computed(() => {
  const yearData = albums.find((album) => album.year === activeYear.value)
  return yearData?.albums || []
})
const scrollY = ref(0)

const albumPlaylistLink = ref(
  albums.find((collection) => collection.year === activeYear.value)?.playlist
)

// Watchers
// Watch activeYear for changes and update albumPlaylistLink
watch(activeYear, () => {
  albumPlaylistLink.value = albums.find(
    (collection) => collection.year === activeYear.value
  )?.playlist
})

// Methods
// selectYear: update active year
function selectYear(year: number) {
  activeYear.value = year
}
// scrollToTop: scroll to top of page
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Event listeners
window.addEventListener('scroll', () => {
  console.log(scrollY.value)
  scrollY.value = window.scrollY
})

// Cleanup
onUnmounted(() => {
  window.removeEventListener('scroll', () => {
    scrollY.value = window.scrollY
  })
})
</script>
