<script setup>
defineProps({
	product: Object,
})
const cartStore = useCartStore()
</script>

<template>
  <v-row>
    <v-col cols="4">
      <ProductImg :src="product?.images[0]" />
    </v-col>
    <v-col
      cols="12"
      md="8"
    >
      <v-card variant="text">
        <v-card-title class="text-capitalize">
          {{ product.title }}
        </v-card-title>
        <v-card-subtitle>
          $ {{ product.price }}
        </v-card-subtitle>
        <v-card-text>
          {{ product.description }}
        </v-card-text>
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
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>

</style>
