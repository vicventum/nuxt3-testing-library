<script setup>
const GET_ALL_PRODUCTS_URL = 'https://dummyjson.com/products?limit=10'
const { data, pending, error } = await useLazyFetch(GET_ALL_PRODUCTS_URL)
const products = data.value.products

const isGrid = ref(true)
</script>

<template>
	<v-container id="home">
		<div v-if="pending">
		Loading...
		</div>
		<template v-else>
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

			<v-row v-show="isGrid">
				<v-col cols="12">
					<v-row>
						<v-col v-for="(product, i) in products" :key="product.id" cols="12" lg="4" sm=6>
							<ProductCardList :product="product"/>
						</v-col>
					</v-row>
				</v-col>
			</v-row>

			<section v-show="!isGrid">
				<ProductCardGrid v-for="(product, i) in products" :key="product.id" :product="product"/>
			</section>
		</template>
	</v-container>		
</template>

<style lang="scss" scoped></style>