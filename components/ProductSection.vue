<script setup>
import ProductCollection from './product/ProductCollection.vue'
defineProps({
  isGrid: Boolean
})
const error = ref(false)
onErrorCaptured((err) => {
	console.error("🚀 ~ onErrorCaptured ~ err:", err)
	error.value = 'Sorry an error occurred'
	return false
})
// const cartStore = useCartStore()
// await cartStore.fetchAllProducts()
</script>

<template>
	<div>
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