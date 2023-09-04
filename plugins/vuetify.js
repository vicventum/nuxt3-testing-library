// import 'vuetify/styles'
import { createVuetify, } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiThemeLightDark, mdiCartOutline, mdiViewList, mdiApps, mdiPlus, mdiMinus, mdiDelete } from '@mdi/js'
// import { md1 } from 'vuetify/blueprints'
// import { VDataTable } from 'vuetify/labs/VDataTable'
// import { defineNuxtPlugin } from '#app'

// Crea nuevo tema personalizado
const myTheme = {
	dark: true,
	colors: {
		primary: '#ff33a4',
		// background: '#7e22ce',
		// surface: '#7e22ce',
	},
}

export const vuetify = createVuetify({
	// your config will come here
	ssr: true,
	icons: {
		defaultSet: 'mdi',
		// aliases,
		aliases: {
			...aliases,
			themeLightDark: mdiThemeLightDark,
			cartOutline: mdiCartOutline,
			viewList: mdiViewList,
			apps: mdiApps,
			plus: mdiPlus,
			minus: mdiMinus,
			delete: mdiDelete,
		},
		sets: {
			mdi,
		},
	},
	// Cambia la versión de Material Design
	// blueprint: md1,
	defaults: {
		// Modifica la configuración global de los estilos de los componentes
		global: {
			ripple: true,
		},
		// Modifica la configuración de los estilos de un componente específico (el `v-text-field` en este caso)
		// VTextField: {
		// 	variant: 'outlined',
		// 	color: 'primary',
		// }
	},
	// Configura los temas
	theme: {
		defaultTheme: 'dark',
		// themes: {
		// 	myTheme
		// }
	},
	// Configura los íconos personalizados
	// icons: {
	// 	defaultSet: 'custom',
	// 	sets: {
	// 		custom
	// 	},
	// 	aliases,
	// },
	// Agrega componentes adicionales. En este caso el componente de `v-data-table`, de _Vuetify Labs_ (componentes no terminados aún, en estado alpha)
	// components: {
	// 	VDataTable
	// }
})
export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.use(vuetify)
})