
import { defineStore } from 'pinia'

export const useCartStore = defineStore({
  id: 'cartStore',
  state: () => ({
    products: [],
    isProductsPending: true,
    cartContent: {},
    theme: 'dark',
  }),

  getters: {
    // Devuelve el array de productos del carrito (cartContent) pero formateado
    formattedCart() {
      console.log("🚀 ~ formattedCart ~ formattedCart:")
      return Object.keys(this.cartContent).map((productId) => {
        const product = this.cartContent[productId]

        return {
          id: product.productId,
          image: this.products.find((p) => p.id === product.productId).images[0],
          name: this.products.find((p) => p.id === product.productId).name,
          price: this.products.find((p) => p.id === product.productId).price,
          quantity: product.quantity,
          cost:
            product.quantity *
            this.products.find((p) => p.id === product.productId).price,
        }
      })
    },
    // total() {
    //   return Object.keys(this.cartContent).reduce((acc, id) => {
    //     const product = products.find((p) => p.id === id)
    //     if (product) {
    //       return acc + product.price * this.cartContent[id].quantity
    //     }
    //     return acc + 0
    //   }, 0)
    // },
    // productsTotal() {
    //   return Object.keys(this.cartContent).reduce((acc, id) => {
    //     return acc + this.cartContent[id].quantity
    //   }, 0)
    // },
    // getTheme() {
    //   return this.theme
    // },
  },

  actions: {
    async fetchAllProducts() {
      if (this.products.length) return null

      const GET_ALL_PRODUCTS_URL = 'https://dummyjson.com/products?limit=10'
      const { data, pending, error } = await useLazyFetch(GET_ALL_PRODUCTS_URL)
      console.log("🚀 ~ fetchAllProducts ~ data:", data)
      const products = data.value.products
      this.isProductsPending = pending
      this.products = products
      return products
    },
    // Agrega un nuevo producto al carrito, en forma de objeto con el `id` y la cantidad de productos del mismo tipo seleccionado
    add(productId) {
      if (this.cartContent.hasOwnProperty(productId)) {
        this.cartContent[productId] = {
          productId,
          quantity: this.cartContent[productId].quantity + 1,
        }
      } else {
        this.cartContent[productId] = {
          productId,
          quantity: 1,
        }
      }
    },
    remove(productId) {
      if (!this.cartContent[productId]) return null

      this.cartContent[productId].quantity -= 1

      if (this.cartContent[productId].quantity === 0) {
        delete this.cartContent[productId]
      }
    },
    removeProduct(productId) {
      delete this.cartContent[productId]
    },
  },
})
