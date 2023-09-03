import { it, expect, describe, vi } from 'vitest'
import { getByRole, render, screen } from '@testing-library/vue'
// import { useCartStore } from '../stores/cart.js'
import { createTestingPinia } from '@pinia/testing'
// import piniaPluginPersistedstate from '@pinia-plugin-persistedstate/nuxt'
import vuetify from "../plugins/vuetify";

import '@testing-library/jest-dom'
import Dummy from './Dummy.vue'

describe('HelloWorld.vue', () => {
	it('should renders props.msg when passed', () => {
		render(Dummy, {
			global: {
				plugins: [
					createTestingPinia(),
					vuetify
					// piniaPluginPersistedstate()
				],
			},
			props: {}
		})
		// const store = useCartStore()
		const title = screen.getByRole('heading')
		// screen.debug(title)
		screen.debug()
	})
})