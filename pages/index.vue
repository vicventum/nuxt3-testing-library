<script setup>
import ProductSection from '../components/ProductSection.vue';

const isGrid = ref(true)
</script>

<template>
	<v-container id="home" role="index-container">
		<ProductSection :is-grid="isGrid"/>
	</v-container>		
</template>

<style lang="scss" scoped></style>