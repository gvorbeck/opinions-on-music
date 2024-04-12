<template>
  <p
    class="[&_span]:font-josefinSans [&_span]:font-bold [&_span]:uppercase"
    v-if="props.title && props.artist"
  >
    <span>{{ props.title }}</span> <em>by</em> <span>{{ props.artist }}</span>
  </p>
  <p v-else>No title or artist</p>
</template>

<script lang="ts" setup>
const props = defineProps<{ title: String; artist: String }>()
</script>
