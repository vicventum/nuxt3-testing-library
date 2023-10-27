<script setup>
defineProps({
  isGrid: Boolean
})
const cartStore = useCartStore()
await cartStore.fetchAllProducts()
// const GET_ALL_PRODUCTS_URL = 'https://dummyjson.com/products?limit=10'
// const { data, pending, error } = await useLazyFetch(GET_ALL_PRODUCTS_URL)
// const cartStore = {}
// cartStore.products = data.value.products
// cartStore.isProductsPending = pending.value
</script>

<template>
  <div class="mt-16">{{ cartStore?.isProductsPending }}</div>
  <!-- <div v-else key="1">{{cartStore.products}}</div> -->
  <!-- <h2>Loading...</h2>
  <template> -->
    <v-row v-if="isGrid">
      <v-col cols="12">
        <v-row>
          <v-col v-for="(product, i) in cartStore.products" :key="product.id" cols="12" lg="4" sm=6>
            <ProductCardList :product="product"/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <section v-else>
      <ProductCardGrid v-for="(product, i) in cartStore.products" :key="product.id" :product="product"/>
    </section>
  <!-- </template> -->
</template>

<style>

</style>

