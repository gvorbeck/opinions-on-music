<template>
  <aside class="bg-safron rounded-md px-2 shadow-lg">
    <ul class="flex gap-4 overflow-scroll py-2 no-scrollbar">
      <li v-for="year in props.albums" :key="year.year">
        <button
          :class="
            year.year === activeYear
              ? 'font-bold bg-persianGreen text-base/[1] pt-1 pb-0.5 px-1 rounded-sm tracking-wider'
              : ''
          "
          class="font-josefinSans"
          @click="setActiveYear(year.year)"
        >
          {{ year.year }}
        </button>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { type YearList } from '../data/definitions'

// Data
const props = defineProps<{ albums: YearList[]; activeYear: Number }>()
const emit = defineEmits(['select-year'])

// Methods
const setActiveYear = (year: Number) => {
  emit('select-year', year)
}
</script>
