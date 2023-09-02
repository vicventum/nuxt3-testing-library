<script setup>
const cartStore = useCartStore()
</script>

<template>
  <v-container id="cart" class="py-6">
    <v-row>
      <v-col md="8">
        <v-card
          class="py-5 px-4"
          style="max-height: 500px; overflow-y: auto"
        >
          <v-card-title class="mb-5"> My Cart </v-card-title>
          <v-card-text v-if="cartStore.formattedCart?.length">
            <div
              v-for="product in cartStore.formattedCart"
              :key="product.id"
              class="mb-3"
            >
              <v-row>
                <v-col sm="4">
                  <div class="d-flex align-center no-wrap">
                    <img style="width: 90px; height: 90px; object-fit: cover" :src="product.image" />
                    <h3 class="text-capitalize ml-3">
                      {{ product.name }}
                    </h3>
                  </div>
                </v-col>
                <v-col sm="8">
                  <div class="d-flex justify-space-between align-center no-wrap w-full h-100">
                    <div class="d-flex align-center bg-primary rounded">
                      <span class="icon d-flex align-center pa-3" style="cursor: pointer" @click="cartStore.add(product.id)">
                        <v-icon icon="$plus" /> 
                      </span>
                      <span class="number d-flex align-center pa-3">
                        {{ product.quantity }}
                      </span>
                      <span style="cursor: pointer" class="icon d-flex align-center pa-3" @click="cartStore.remove(product.id)">
                        <v-icon icon="$minus" /> 
                      </span>
                    </div>
                    <p>
                      {{ product.quantity }}
                      X {{ product.price }} =
                      <strong>
                        {{ product.cost }}
                      </strong>
                    </p>
                    <v-btn
                      @click="cartStore.removeProduct(product.id)"
                      icon
                    >
                      <v-icon color="red" icon="$delete" /> 
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-card-text>
          <v-card-text
            class="text-center"
            v-else
          >
            <v-btn
              class="text-none mx-auto"
              @click="$router.push('/')"
              color="primary"
            >
              Your cart is empty. Fill it
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        v-if="cartStore.totalPrice"
        md="4"
      >
        <CheckoutPayCard/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped></style>
