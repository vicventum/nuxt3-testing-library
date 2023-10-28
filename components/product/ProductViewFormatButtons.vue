<script setup>
const isGrid = ref(true)
const emit = defineEmits(['changeView'])

function changeProductFormat(value) {
	isGrid.value = value
	emit('changeView', value)
}
</script>

<template>
	<v-row class="my-5">
		<v-col cols="12" class="d-flex" style="gap: .5rem">
			<v-btn :class="{'bg-primary': isGrid}" title="Ver en grid" @click="changeProductFormat(true)">
				<v-icon icon="$apps" />
			</v-btn>

			<v-btn :class="{'bg-primary': !isGrid}" title="Ver en lista" @click="changeProductFormat(false)">
				<v-icon icon="$viewList" />
			</v-btn>
		</v-col>
	</v-row>
</template>

<style lang="scss" scoped>

</style>