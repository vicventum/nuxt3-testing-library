<script setup>
import Header from './components/layout/Header.vue'

// const cartStore = useCartStore()
// cartStore.fetchAllProducts()
</script>

<template>
  <v-layout id="inspire">
    <v-main>
      <Header />
      <!-- <router-view/> -->
      <NuxtPage/>
    </v-main>
  </v-layout>
</template>
