<script setup>
import ProductCollection from './product/ProductCollection.vue'
onErrorCaptured((err) => {
	console.error("🚀 ~ onErrorCaptured ~ err:", err)
	error.value = 'Sorry an error occurred'
	return false
})
const error = ref(false)

const isGrid = ref(true)

function changeFormatProducts(newValue) {
	isGrid.value = newValue
}
// const cartStore = useCartStore()
// await cartStore.fetchAllProducts()
</script>

<template>
	<div>
		<!-- CHANGE LAYOUT BUTTONS -->
		<ProductViewFormatButtons @change-view="changeFormatProducts"/>
		<p v-if="error">{{ error }}</p>
		<Suspense v-else>
			<template #default>
				<ProductCollection :is-grid="isGrid" />
			</template>
			<template #fallback>
				Loading...
			</template>
		</Suspense>
	</div>
</template>

<style lang="scss" scoped>

</style>