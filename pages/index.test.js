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

import App from '../app.vue'
import Index from './index.vue'

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
	thumbnail: '',
	images: [''],
}

describe('Index.vue', () => {
	it('should register a new product in the cart icon in the header when adding a new product', async () => {
		mockFetchedData.mockImplementationOnce(() => ({
			products: [productTest],
		}))

		await render(App, { NuxtPage: Index })

		let badge
		badge = screen.getByTitle(/ver carrito/i)
		expect(badge).toHaveTextContent(0)

		let buttonAddToCart
		await waitFor(async () => {
			buttonAddToCart = await screen.findByRole('button', {
				name: 'Add to Cart',
			})
		})

		const user = userEvent.setup()
		await user.click(buttonAddToCart)

		expect(badge).toHaveTextContent(1)
	})
})
