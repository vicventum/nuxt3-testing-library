import '@testing-library/jest-dom'
import { it, expect, describe, vi } from 'vitest'
import {
	getByRole,
	getByText,
	render,
	screen,
	waitFor,
} from '../test-utils/custom-reder.js'
import userEvent from '@testing-library/user-event'
console.log('🚀 ~ userEvent:', userEvent)
import { flushPromises } from '@vue/test-utils'

import Index from './index.vue'

const mockFetchedData = vi.fn()
vi.stubGlobal('useLazyFetch', mockFetchedData)

const productTest = {
	id: 1,
	title: 'iPhone 9',
	description: 'An apple mobile which is nothing like apple',
	price: 549,
	discountPercentage: 12.96,
	rating: 4.69,
	stock: 94,
	brand: 'Apple',
	category: 'smartphones',
	thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
	images: ['https://i.dummyjson.com/data/products/1/1.jpg'],
}
describe('Index.vue', () => {
	it('should show at least one product to load the page', async () => {
		mockFetchedData.mockImplementationOnce(async () => ({
			pending: false,
			error: undefined,
			data: {
				value: {
					products: [productTest],
				},
			},
		}))
		render(Index)
		// await flushPromises()
		let product
		await waitFor(async () => {
			product = await screen.getByText(productTest.title)
		})
		screen.debug(product)
		expect(product).toBeInTheDocument()
	})

	it('should render at least one item in list format when pressing the "Ver en lista" button', async () => {
		mockFetchedData.mockImplementationOnce(async () => ({
			pending: false,
			error: undefined,
			data: {
				value: {
					products: [productTest],
				},
			},
		}))
		render(Index)

		const user = userEvent.setup()
		const btnList = screen.getByTitle(/ver en lista/i)
		await user.click(btnList)

		const product = screen.getByText(productTest.description)
		screen.debug(product)
		expect(product).toBeInTheDocument()
	})
})
