import { h, defineComponent, Suspense } from 'vue'
import '@testing-library/jest-dom'
import { it, expect, describe, vi } from 'vitest'
import {
	getByRole,
	getByText,
	render,
	asyncRender,
	screen,
	waitFor,
	wrapInSuspense,
	mountWithSuspense,
	dflushPromises,
} from '../test-utils/custom-reder.js'
import userEvent from '@testing-library/user-event'
import { flushPromises } from '@vue/test-utils'

import ProductSection from './ProductSection.vue'

const mockFetchedData = vi.fn()
vi.stubGlobal('$fetch', mockFetchedData)

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
describe('ProductSection.vue', () => {
	it('should show a loading message while data is received and then disappear', async () => {
		mockFetchedData.mockImplementationOnce(
			() =>
				new Promise((res) =>
					setTimeout(() => res({ products: [productTest] }), 200)
				)
		)

		render(ProductSection)

		// screen.debug()
		let loadingMessage = screen.getByText(/loading/i)
		expect(loadingMessage).toBeInTheDocument()

		await waitFor(async () => {
			loadingMessage = screen.queryByText(/loading/i)
			expect(loadingMessage).not.toBeInTheDocument()
			// screen.debug(loadingMessage)
		})
	})

	it('should show at least one product to load the page', async () => {
		mockFetchedData.mockImplementationOnce(() => ({
			products: [productTest],
		}))

		render(ProductSection)
		// screen.debug()
		// await flushPromises()

		const product = await screen.findByText(productTest.title)
		expect(product).toBeInTheDocument()
		// screen.debug()
		// await waitFor(async () => {
		// 	// screen.debug(product)
		// })
	})

	it('should render at least one item in list format when pressing the "Ver en lista" button', async () => {
		mockFetchedData.mockImplementationOnce(() => ({
			products: [productTest],
		}))

		render(ProductSection)
		// await flushPromises()

		const user = userEvent.setup()
		const btnList = screen.getByTitle(/ver en lista/i)
		await user.click(btnList)

		const product = screen.getByText(productTest.description)
		// screen.debug()
		// screen.debug(product)
		expect(product).toBeInTheDocument()
	})

	it('should show an error message when the HTTP call throws an error', async () => {
		mockFetchedData.mockRejectedValueOnce(new Error())

		render(ProductSection)

		await waitFor(() => {
			const errorMessage = screen.getByText(/sorry an error occurred/i)
			expect(errorMessage).toBeInTheDocument()
			// screen.debug()
		})
	})
})
