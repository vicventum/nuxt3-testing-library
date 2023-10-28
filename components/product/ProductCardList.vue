<script setup>
defineProps({
  product: Object,
})
const cartStore = useCartStore()
</script>

<template>
  <v-card id="ProductCardList" class="mx-auto pb-2">
    <ProductImg :src="product?.images[0]" />

    <v-card-title class="text-capitalize">
      {{ product.title }}
    </v-card-title>
    <v-card-subtitle>
      $ {{ product.price }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="primary">
        Read more
      </v-btn>

      <v-spacer />

      <v-btn
        color="primary"
        variant="elevated"
        role="button"
        @click="cartStore.add(product.id)"
      >
        Add to Cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style>

</style>
