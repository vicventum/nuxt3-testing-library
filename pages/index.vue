<script setup>
const cartStore = useCartStore()
cartStore.fetchAllProducts()
// const GET_ALL_PRODUCTS_URL = 'https://dummyjson.com/products?limit=10'
// const cartStore = {
// 	pending: true,
// 	products: []
// }

// const { data, pending, error } = await useLazyFetch(GET_ALL_PRODUCTS_URL)
// console.log("🚀 ~ setTimeout ~ data, pending:", data, pending)

// watch(
// 	() => pending,
// 	() => {
// 		console.log("🚀 ~ pending:", pending)
// 	},
// 	{ immediate: true }
// 	)
// 	watch(
// 		() => data,
// 		() => {
// 		console.log("🚀 ~ data:", data)
// 	},
// 	{ immediate: true }
// 	)
// // setTimeout(async () => {
// 	cartStore.products = data.value.products
// 	cartStore.isProductsPending = pending.value
// 	console.log("🚀🚀 ~ cartStore:", cartStore)
// // }, 2000)
// console.log("🚀 ~ cartStore:", cartStore)
const isGrid = ref(true)
</script>

<template>
	<v-container id="home" role="index-container">
		<div class="mt-16">{{ cartStore.isProductsPending }}</div>
		<!-- {{ cartStore.products }} -->
		<div v-if="cartStore.isProductsPending">
			Loading...
		</div>
			<!-- CHANGE LAYOUT BUTTONS -->
			<v-row class="my-5">
				<v-col cols="12" class="d-flex" style="gap: .5rem">
					<v-btn :class="{'bg-primary': isGrid}" @click="isGrid = true">
						<v-icon icon="$apps" />
					</v-btn>

					<v-btn :class="{'bg-primary': !isGrid}" @click="isGrid = false">
							<v-icon icon="$viewList" />
					</v-btn>
				</v-col>
			</v-row>
			
		<Suspense>
			<template #default>
				<div>
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
				</div>
			</template>
			<template #fallback>
				<h2>Loading</h2>
			</template>
		</Suspense>
	</v-container>		
</template>

<style lang="scss" scoped></style>