<script setup>
import { useTheme } from 'vuetify'
// import { mdiAccount, } from '@mdi/js'

const theme = useTheme()

// Cambia el color del tema activo
function toggleTheme(params) {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
	<div>
		<v-app-bar class="px-12" color="black-lighten-1" flat>
			<v-btn>
				Victor
			</v-btn>

      <v-spacer/>


      <v-btn class="ml-4" variant="tonal" @click="toggleTheme">
        <!-- <v-icon start :icon="mdiAccount" /> -->
        <v-icon icon="$themeLightDark" start />
        Toggle Theme
      </v-btn>
    </v-app-bar>
	</div>		
</template>

<style lang="scss" scoped>

</style>