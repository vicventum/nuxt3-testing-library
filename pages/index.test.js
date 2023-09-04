import { it, expect, describe, vi } from 'vitest'
import { getByRole, render, screen } from '@testing-library/vue'
import { flushPromises } from '@vue/test-utils'
import '@testing-library/jest-dom'

import { createTestingPinia } from '@pinia/testing'
import { useCartStore } from '../stores/cart.js'

import { createVuetify } from 'vuetify'
// import { vuetify } from '../plugins/vuetify.js'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiThemeLightDark, mdiCartOutline, mdiViewList, mdiApps, mdiPlus, mdiMinus, mdiDelete } from '@mdi/js'
const vuetify = createVuetify({
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
	defaults: {
		global: {
			ripple: true,
		},
	},
	theme: {
		defaultTheme: 'dark',
	},
})

import Index from './index.vue'

// vi.stubGlobal('defineNuxtPlugin', () => ({ /* your mock implementation... */ }))
vi.stubGlobal('useLazyFetch', async () => ({
	pending: false,
	error: undefined,
	data: {
		value: {
			products: [
				{
					"id": 1,
					"title": "iPhone 9",
					"description": "An apple mobile which is nothing like apple",
					"price": 549,
					"discountPercentage": 12.96,
					"rating": 4.69,
					"stock": 94,
					"brand": "Apple",
					"category": "smartphones",
					"thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
					"images": [
						"https://i.dummyjson.com/data/products/1/1.jpg",
					]
				}
			]
		}
	}
}))

describe('Index.vue', () => {
	it('should test', async () => {
		render(Index, {
			global: {
				plugins: [
					createTestingPinia({ stubActions: false, }),
					vuetify
					// piniaPluginPersistedstate()
				],
			},
		})
		await flushPromises()
		// const store = useCartStore()
		// console.log("🚀 ~ it ~ store:", store.products)

		screen.debug()
	})
})