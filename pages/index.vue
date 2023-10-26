<script setup>
const cartStore = useCartStore()
await cartStore.fetchAllProducts()
const isGrid = ref(true)
// const GET_ALL_PRODUCTS_URL = 'https://dummyjson.com/products?limit=10'
// const { data, pending, error } = await useLazyFetch(GET_ALL_PRODUCTS_URL)
// const cartStore = {}
// cartStore.products = data.value.products
// cartStore.isProductsPending = pending.value
</script>

<template>
	<v-container id="home" role="index-container">
		<div class="mt-16">{{ cartStore.isProductsPending }}</div>
		<!-- {{ cartStore.products }} -->
		<!-- CHANGE LAYOUT BUTTONS -->
		<v-row class="my-5">
			<v-col cols="12" class="d-flex" style="gap: .5rem">
				<v-btn :class="{'bg-primary': isGrid}" title="Ver en grid" @click="isGrid = true">
					<v-icon icon="$apps" />
				</v-btn>

				<v-btn :class="{'bg-primary': !isGrid}" title="Ver en lista" @click="isGrid = false">
					<v-icon icon="$viewList" />
				</v-btn>
			</v-col>
		</v-row>
		<h2 v-if="cartStore.isProductsPending" key="0">Loading...</h2>
		<!-- <div v-else key="1">{{cartStore.products}}</div> -->
		<template v-else>
			<v-row v-if="isGrid">
				<v-col cols="12">
					<v-row>
						<v-col v-for="(product, i) in cartStore.products" :key="product.id" cols="12" lg="4" sm=6>
							<ProductCardList :product="product"/>
						</v-col>
					</v-row>
				</v-col>
			</v-row>
			<section v-if="!isGrid">
				<ProductCardGrid v-for="(product, i) in cartStore.products" :key="product.id" :product="product"/>
			</section>
		</template>
	</v-container>		
</template>

<style lang="scss" scoped></style>