import * as cartService from '../src/services/cart.js'
import { createItem } from '../src/services/item.js'

describe('Cart Service Tests', () => {
  let cart, wishList

  beforeEach(() => {
    cart = []
    wishList = []
  })

  test('should add and remove items from cart', async () => {
    const item = await createItem("Tênis", 100, 2)

    await cartService.addItemToCart(cart, item)
    expect(cart).toHaveLength(1)

    await cartService.removeItemFromCart(cart, item)
    expect(cart[0].quantity).toBe(1)

    await cartService.deleteItemFromCart(cart, "Tênis")
    expect(cart).toHaveLength(0)
  })

  test('should calculate cart total', async () => {
    const item1 = await createItem("Item 1", 50, 2)
    const item2 = await createItem("Item 2", 30, 1)

    cart.push(item1, item2)

    const total = await cartService.totalCartItems(cart)
    expect(total).toBe(130) // (50*2) + (30*1)
  })

  test('should manage wishlist', async () => {
    const item = await createItem("Produto", 200, 1)

    await cartService.addToWishList(wishList, item)
    expect(wishList).toHaveLength(1)

    await cartService.removeFromWishList(wishList, "Produto")
    expect(wishList).toHaveLength(0)
  })
})
