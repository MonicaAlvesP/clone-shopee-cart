import * as cartService from "./services/cart.js"
import { createItem } from "./services/item.js"

const myCart = []
const myWishList = []

console.log("😃 Bem vindo ao seu carrinho de compras da Shopee!")

const item1 = await createItem("Tênis Nike", 299.99, 1)
const item2 = await createItem("Camisa Adidas", 89.99, 2)

// adiciona itens ao carrinho
await cartService.addItemToCart(myCart, item1)
await cartService.addItemToCart(myCart, item2)

// remove uma unidade do item2 do carrinho
await cartService.removeItemFromCart(myCart, item2)

// adiciona item2 aos favoritos
await cartService.addToWishList(myWishList, item2)

// mostra todos os itens do carrinho
await cartService.viewCartItems(myCart)

// mostra lista de desejos
await cartService.viewWishList(myWishList)

// mostra o valor total dos itens no carrinho
await cartService.totalCartItems(myCart)

