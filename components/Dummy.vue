<script setup>
const cartStore = useCartStore()
</script>

<template>
	<div>
		<h1 role="heading">oli uwu</h1>
		{{ cartStore.products }}
		<v-btn color="success">text</v-btn>
	</div>
</template>

<style lang="scss" scoped>

</style>