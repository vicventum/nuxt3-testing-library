<script setup>
const isGrid = ref(true)
// const cartStore = useCartStore()
// await cartStore.fetchAllProducts()
</script>

<template>
	<v-container id="home" role="index-container">
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
		<Suspense>
			<template #default>
				<ProductCollection :is-grid="isGrid" />
			</template>
			<template #fallback>
				Loading... 2
			</template>
		</Suspense>
	</v-container>		
</template>

<style lang="scss" scoped></style>