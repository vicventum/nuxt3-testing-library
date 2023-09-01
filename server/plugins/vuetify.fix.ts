import type { RenderResponse } from 'nitropack'

export default defineNitroPlugin((nitroApp) => {
	// @ts-ignore
	nitroApp.hooks.hook('render:response', (response: RenderResponse) => {
		response.body = response.body.replaceAll('/_nuxt/\0', '/_nuxt/')
	})
})