<script setup lang="ts">
import { ref } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import SidebarMenu from './components/SidebarMenu.vue'
import MainContent from './components/MainContent.vue'
import albums from './data/albums.json'

const activeYear = ref(albums[0].year)
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <SiteHeader />
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="12" sm="2">
        <SidebarMenu :albums="albums" />
      </v-col>
      <v-col xs="12" sm="10">
        <main>
          <MainContent :title="activeYear.toString()" />
        </main>
      </v-col>
    </v-row>
    <v-row>
      <v-col>footer here</v-col>
    </v-row>
  </v-container>
</template>
