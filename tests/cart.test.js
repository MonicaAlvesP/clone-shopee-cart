import * as cartService from '../src/services/cart.js'
import createItem from '../src/services/item.js'
import { jest } from '@jest/globals'

describe('Cart Service Tests', () => {
  let cart

  beforeEach(() => {
    cart = []
  })

  describe('addItemToCart', () => {
    test('should add item to empty cart', async () => {
      const item = await createItem("Tênis Nike", 299.99, 1)

      await cartService.addItemToCart(cart, item)

      expect(cart).toHaveLength(1)
      expect(cart[0]).toEqual(item)
    })

    test('should add multiple items to cart', async () => {
      const item1 = await createItem("Tênis Nike", 299.99, 1)
      const item2 = await createItem("Camisa Adidas", 89.99, 2)

      await cartService.addItemToCart(cart, item1)
      await cartService.addItemToCart(cart, item2)

      expect(cart).toHaveLength(2)
      expect(cart[0]).toEqual(item1)
      expect(cart[1]).toEqual(item2)
    })
  })

  describe('deleteItemFromCart', () => {
    test('should delete item by name', async () => {
      const item1 = await createItem("Tênis Nike", 299.99, 1)
      const item2 = await createItem("Camisa Adidas", 89.99, 2)

      cart.push(item1, item2)

      await cartService.deleteItemFromCart(cart, "Tênis Nike")

      expect(cart).toHaveLength(1)
      expect(cart[0].name).toBe("Camisa Adidas")
    })

    test('should not delete if item not found', async () => {
      const item = await createItem("Tênis Nike", 299.99, 1)
      cart.push(item)

      await cartService.deleteItemFromCart(cart, "Item Inexistente")

      expect(cart).toHaveLength(1)
    })
  })

  describe('removeItemFromCart', () => {
    test('should decrease quantity when quantity > 1', async () => {
      const item = await createItem("Camisa Adidas", 89.99, 3)
      cart.push(item)

      await cartService.removeItemFromCart(cart, item)

      expect(cart).toHaveLength(1)
      expect(cart[0].quantity).toBe(2)
    })

    test('should remove item completely when quantity = 1', async () => {
      const item = await createItem("Tênis Nike", 299.99, 1)
      cart.push(item)

      await cartService.removeItemFromCart(cart, item)

      expect(cart).toHaveLength(0)
    })

    test('should handle item not found', async () => {
      const item1 = await createItem("Tênis Nike", 299.99, 1)
      const item2 = await createItem("Camisa Adidas", 89.99, 2)

      cart.push(item1)

      // Mock console.log to capture the message
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation()

      await cartService.removeItemFromCart(cart, item2)

      expect(consoleSpy).toHaveBeenCalledWith("Item não encontrado no carrinho.")
      expect(cart).toHaveLength(1)

      consoleSpy.mockRestore()
    })
  })

  describe('totalCartItems', () => {
    test('should calculate total of empty cart', async () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation()

      const total = await cartService.totalCartItems(cart)

      expect(total).toBe(0)
      expect(consoleSpy).toHaveBeenCalledWith("💰 O valor total dos itens no carrinho é: R$ 0")

      consoleSpy.mockRestore()
    })

    test('should calculate total of cart with one item', async () => {
      const item = await createItem("Tênis Nike", 299.99, 1)
      cart.push(item)

      const consoleSpy = jest.spyOn(console, 'log').mockImplementation()

      const total = await cartService.totalCartItems(cart)

      expect(total).toBe(299.99)
      expect(consoleSpy).toHaveBeenCalledWith("💰 O valor total dos itens no carrinho é: R$ 299.99")

      consoleSpy.mockRestore()
    })

    test('should calculate total of cart with multiple items', async () => {
      const item1 = await createItem("Tênis Nike", 299.99, 1)
      const item2 = await createItem("Camisa Adidas", 89.99, 2)

      cart.push(item1, item2)

      const consoleSpy = jest.spyOn(console, 'log').mockImplementation()

      const total = await cartService.totalCartItems(cart)

      expect(total).toBe(479.97) // 299.99 + (89.99 * 2)
      expect(consoleSpy).toHaveBeenCalledWith("💰 O valor total dos itens no carrinho é: R$ 479.97")

      consoleSpy.mockRestore()
    })
  })

  describe('viewCartItems', () => {
    test('should display empty cart message', async () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation()

      await cartService.viewCartItems(cart)

      expect(consoleSpy).toHaveBeenCalledWith("Lista dos itens no carrinho:")

      consoleSpy.mockRestore()
    })

    test('should display cart items', async () => {
      const item = await createItem("Tênis Nike", 299.99, 1)
      cart.push(item)

      const consoleSpy = jest.spyOn(console, 'log').mockImplementation()

      await cartService.viewCartItems(cart)

      expect(consoleSpy).toHaveBeenCalledWith("Lista dos itens no carrinho:")
      expect(consoleSpy).toHaveBeenCalledWith("1  Tênis Nike ................ 1un 299.99R$\nSubtotal: 299.99R$")

      consoleSpy.mockRestore()
    })
  })
})
