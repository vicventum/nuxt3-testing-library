<script setup>
defineProps({
	src: String,
})
// console.log("🚀 ~ src:", src)
</script>

<template>
	<v-img :src="src" height="200px" cover>
		<template #placeholder>
			<v-row class="fill-height ma-0" align="center" justify="center">
				<v-progress-circular 
					color="grey-lighten-5"
					indeterminate
				/>
			</v-row>
		</template>
	</v-img>

</template>

<style lang="scss" scoped>

</style>
