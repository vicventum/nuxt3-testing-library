import '@testing-library/jest-dom'
import { it, expect, describe, vi } from 'vitest'
import {
	getByRole,
	getByText,
	render,
	screen,
	waitFor,
} from '../test-utils/custom-reder.js'
import { flushPromises } from '@vue/test-utils'

import Index from './index.vue'

const mockFetchedData = vi.fn()
// vi.stubGlobal('defineNuxtPlugin', () => ({ /* your mock implementation... */ }))
vi.stubGlobal('useLazyFetch', mockFetchedData)
describe('Index.vue', () => {
	it('should test', async () => {
		mockFetchedData.mockImplementationOnce(async () => ({
			pending: false,
			error: undefined,
			data: {
				value: {
					products: [
						{
							id: 1,
							title: 'iPhone 9',
							description: 'An apple mobile which is nothing like apple',
							price: 549,
							discountPercentage: 12.96,
							rating: 4.69,
							stock: 94,
							brand: 'Apple',
							category: 'smartphones',
							thumbnail:
								'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
							images: ['https://i.dummyjson.com/data/products/1/1.jpg'],
						},
					],
				},
			},
		}))
		render(Index)
		// await flushPromises()
		let product
		await waitFor(async () => {
			product = await screen.getByText('iPhone 9')
		})
		screen.debug(product)
		expect(product).toBeInTheDocument()
	})

	it('should test', async () => {
		mockFetchedData.mockImplementationOnce(async () => ({
			pending: false,
			error: undefined,
			data: {
				value: {
					products: [
						{
							id: 1,
							title: 'iPhone 10',
							description: 'An apple mobile which is nothing like apple',
							price: 549,
							discountPercentage: 12.96,
							rating: 4.69,
							stock: 94,
							brand: 'Apple',
							category: 'smartphones',
							thumbnail:
								'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
							images: ['https://i.dummyjson.com/data/products/1/1.jpg'],
						},
					],
				},
			},
		}))
		render(Index)
		// await flushPromises()
		let product
		await waitFor(async () => {
			product = await screen.getByText('iPhone 10')
		})
		screen.debug(product)
		expect(product).toBeInTheDocument()
	})
})
