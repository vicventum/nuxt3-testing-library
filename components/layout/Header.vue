<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()
const cartStore = useCartStore()

// Cambia el color del tema activo
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
	<div>
		<v-app-bar class="px-12" color="black-lighten-1" flat>
			<!-- <v-app-bar-title @click="navigateTo('/')"> -->
			<v-app-bar-title>
        <v-btn to="/" variant="plain" class="text-none">
          Shopping Web
        </v-btn>
      </v-app-bar-title>

      <v-spacer/>

      <v-btn stacked @click="navigateTo('/cart')" title="Ver carrito">
        <v-badge :content="cartStore.totalCartProducts" color="error">
          <v-icon icon="$cartOutline" />
        </v-badge>
      </v-btn>

      <v-btn 
        class="ml-4 text-none" 
        variant="tonal" 
        prepend-icon="$themeLightDark"
        @click="toggleTheme"
      >
        Toggle Theme
      </v-btn>
    </v-app-bar>
	</div>		
</template>

<style lang="scss" scoped>

</style>