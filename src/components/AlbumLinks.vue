<template>
  <ul class="flex gap-2">
    <li v-for="(value, key) in props.links" :key="value">
      <a :href="value" class="underline" target="_blank">
        <IconLastfm v-if="key === 'lastfm'" class="album-ext-link" />
        <IconSpotify v-else-if="key === 'spotify'" class="album-ext-link" />
        <IconGenius v-else-if="key === 'genius'" class="album-ext-link" />
      </a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { Album } from '@/data/definitions'
import IconLastfm from './icons/IconLastfm.vue'
import IconSpotify from './icons/IconSpotify.vue'
import IconGenius from './icons/IconGenius.vue'

const props = defineProps<{ links: Album['links'] }>()
</script>
