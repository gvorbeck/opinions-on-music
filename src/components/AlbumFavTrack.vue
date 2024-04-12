<template>
  <div class="flex gap-1 opacity-65">
    <span class="material-symbols-outlined" title="Favorite Track"> favorite </span>
    <span>"{{ track }}"</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ track: string }>()
</script>
