import { render as vtlRender } from '@testing-library/vue'

import { createTestingPinia } from '@pinia/testing'

import { createVuetify } from 'vuetify'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import {
	mdiThemeLightDark,
	mdiCartOutline,
	mdiViewList,
	mdiApps,
	mdiPlus,
	mdiMinus,
	mdiDelete,
} from '@mdi/js'
const vuetify = createVuetify({
	// your config will come here
	components,
	directives,
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

export * from '@testing-library/vue'
// export * from '@testing-library/user-event'

export function render(component) {
	return vtlRender(component, {
		global: {
			plugins: [
				createTestingPinia({ stubActions: false }),
				vuetify,
				// piniaPluginPersistedstate()
			],
		},
	})
}
