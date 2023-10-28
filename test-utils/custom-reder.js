import { render as vtlRender } from '@testing-library/vue'
import { h, defineComponent, Suspense } from 'vue'
import { renderAsync } from './render-async.js'
import { flushPromises } from '@vue/test-utils'
import {} from '@nuxt/test-utils'
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

import { createRouter, createWebHistory } from 'vue-router'
// import { NuxtPage } from '#build/components.js'
// import { } from 'nuxt/dist/app/components/index.js'
const routes = [
	{
		path: '/',
		component: {
			template: 'Welcome to the blogging app',
		},
	},
]
const router = createRouter({
	history: createWebHistory(),
	routes: routes,
})

// import Index from '../pages/index.vue'
export async function render(component, { routes, NuxtPage } = {}) {
	// router.push('/')
	// await router.isReady()
	return vtlRender(component, {
		global: {
			plugins: [
				createTestingPinia({ stubActions: false }),
				vuetify,
				// router,
				// piniaPluginPersistedstate()
			],
			stubs: {
				NuxtPage: false,
			},
			components: {
				// NuxtPage: Index,
				NuxtPage,
			},
		},
	})
}

export function wrapInSuspense() {
	return defineComponent({
		render() {
			return h(
				'div',
				{ id: 'root' },
				h(Suspense, null, {
					default() {
						return h(component, props)
					},
					fallback: h('div', 'fallback'),
				})
			)
		},
	})
}

const SUSPENSE_TEST_TEMPLATE = `
<div id="TestRoot">
  <suspense>
    <async-component v-bind="$attrs" v-on="emitListeners">
      <template v-for="(_, slot) of $slots" :key="slot" #[slot]="scope">
        <slot key="" :name="slot" v-bind="scope" />
      </template>
    </async-component>
    <template #fallback>
      Suspense Fallback
    </template>
  </suspense>
</div>
`
function getSuspenseWrapper(component) {
	return defineComponent({
		setup(_props, { emit }) {
			const emitListeners = reactive({})
			if ('emits' in component && Array.isArray(component.emits)) {
				for (const emitName of component.emits) {
					emitListeners[emitName] = (...args) => {
						emit(emitName, ...args)
					}
				}
			}
			return {
				emitListeners,
			}
		},
		emits:
			'emits' in component && Array.isArray(component.emits)
				? component.emits
				: [],
		components: {
			AsyncComponent: component,
		},
		inheritAttrs: false,
		template: SUSPENSE_TEST_TEMPLATE,
	})
}

export async function asyncRender(component) {
	// render(getSuspenseWrapper(component))
	await renderAsync(
		defineComponent({
			render() {
				return h(Suspense, null, {
					default: h(component),
					fallback: h('div', 'fallback'),
				})
			},
		})
	)
}

export async function mountWithSuspense(component, options) {
	const wrapper = defineComponent({
		components: { [component.name]: component },
		props: Object.keys(options.props ?? {}),
		template: `<suspense><${component.name} v-bind="$props" /></suspense>`,
	})

	const result = render(wrapper, options)

	await flushPromises()

	return result
}
const scheduler = typeof setImmediate === 'function' ? setImmediate : setTimeout

export function dflushPromises() {
	return new Promise((resolve) => {
		scheduler(resolve, 0)
	})
}
