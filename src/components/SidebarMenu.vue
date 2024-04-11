<template>
  <aside class="bg-safron card bevel-border">
    <ul class="flex md:flex-col gap-4 md:gap-6 overflow-scroll no-scrollbar">
      <li v-for="year in props.albums" :key="year.year">
        <button
          :class="
            year.year === activeYear
              ? 'font-bold bg-persianGreen text-base/[1] pt-1 md:pt-2.5 pb-0.5 px-1 md:px-2 rounded-sm tracking-wider'
              : ''
          "
          class="font-josefinSans md:text-5xl/[1] lg:text-3xl/[1] mx-auto block"
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
