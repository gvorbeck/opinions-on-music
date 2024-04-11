<template>
  <div class="flex flex-col gap-4 mx-4 py-4">
    <div class="hidden-md-and-up"><SiteHeader /></div>
    <div class="grid grid-cols-12 gap-4">
      <aside class="col-span-full md:col-span-3 lg:col-span-2">
        <SidebarMenu :albums="albums" :activeYear="activeYear" @select-year="selectYear" />
      </aside>
      <main class="col-span-full md:col-span-9 lg:col-span-10">
        <MainContent :title="activeYear.toString()" :albums="activeYearAlbums" />
      </main>
    </div>
    <div>
      <SiteFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import SidebarMenu from './components/SidebarMenu.vue'
import MainContent from './components/MainContent.vue'
import albums from './data/albums.json'

// Data
const activeYear = ref(albums[0].year)
const activeYearAlbums = computed(
  () => albums.find((album) => album.year === activeYear.value)?.albums
)

// Methods
function selectYear(year: number) {
  activeYear.value = year
}
</script>
