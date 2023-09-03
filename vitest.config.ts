import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		Components({
			dirs: ['./components']
		}),
		AutoImport({
			imports: [
				'vue',
				'vitest',
				'pinia',

				// {
				// 	'@pinia-plugin-persistedstate/nuxt/dist/runtime/storages': ['persistedState']
				// }
			],
			dirs: ['./stores', './composables', './utils', './plugins'],
			dts: true,
		}),
	],
	test: {
		// include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		globals: true,
		environment: 'happy-dom',
		// @ts-ignore
		// setupFilesAfterEnv: './setup.ts',
		// testTimeout: 10000,
	},
	// resolve: {
	// 	alias: [
	// 		{
	// 			find: '@vue/test-utils',
	// 			replacement: '/node_modules/@nuxt/test-utils/dist/index.js',
	// 		},
	// 	],
	// },
	// moduleNameMapper: {
	// 	'^@/(.*)$': '<rootDir>/$1',
	// 	'^~/(.*)$': '<rootDir>/$1',
	// 	// '^vue$': 'vue/dist/vue.common.js',
	// },
})
