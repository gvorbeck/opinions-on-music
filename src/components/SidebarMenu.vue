<template>
  <aside>
    <v-list lines="one">
      <v-list-item
        v-for="year in props.albums"
        :key="year.year"
        :title="year.year"
        link
      ></v-list-item>
    </v-list>
  </aside>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { type YearList } from '../data/definitions'

const props = defineProps<{ albums: YearList[] }>()
</script>
