
import { it, expect, describe, vi } from 'vitest'
import { getByRole, render, screen } from '@testing-library/vue'
// import { useCartStore } from '../stores/cart.js'
import { createTestingPinia } from '@pinia/testing'
// import piniaPluginPersistedstate from '@pinia-plugin-persistedstate/nuxt'
// import vuetify from "../plugins/vuetify";

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
	components,
	directives,
})

// import Vue from "vue"
// import Vuetify from 'vuetify'
// Vue.use(Vuetify)

import '@testing-library/jest-dom'
import Dummy from './Dummy.vue'


describe('Dummy.vue', () => {
	it('should test', () => {
		render(Dummy, {
			global: {
				plugins: [
					createTestingPinia(),
					vuetify
					// piniaPluginPersistedstate()
				],

				// },
				// props: {},
				// vuetify: new Vuetify(),
			},
			// (vue) => {
			// 	// Let's register and configure Vuei18n normally
			// 	vue.use(Vuetify)
			// }
		})
		// const store = useCartStore()
		const title = screen.getByRole('heading')
		// screen.debug(title)
		screen.debug()
	})
})