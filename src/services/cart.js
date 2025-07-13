// Quais ações meu carrinho pode fazer??
// CASOS DE USO:
// -> adicionar item no carrinho
async function addItemToCart(userCart, item) {
  userCart.push(item)
}

// -> deletar um item do carrinho - um item por vez
async function deleteItemFromCart(userCart, nameItem) {
  const index = userCart.findIndex(
    (item) => item.name === nameItem
  )
  if (index !== -1) {
    userCart.splice(index, 1)
  }
}

// -> remover item do carrinho
async function removeItemFromCart(userCart, item) {
  const indexItem = userCart.findIndex((product) => product.name === item.name)
  if (indexItem === -1) {
    console.log("Item não encontrado no carrinho.")
    return
  }

  if (userCart[indexItem].quantity > 1) {
    userCart[indexItem].quantity -= 1
  } else if (userCart[indexItem].quantity === 1) {
    userCart.splice(indexItem, 1)
  }
}

// -> Ver itens do carrinho
async function viewCartItems(userCart) {
  console.log("Lista dos itens no carrinho:")
  userCart.forEach((item, index) => {
    console.log(`${index + 1}  ${item.name} ................ ${item.quantity}un ${item.price}R$\nSubtotal: ${item.subtotal()}R$`)
  })
}

// -> calcular total de items no carrinho
async function totalCartItems(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`💰 O valor total dos itens no carrinho é: R$ ${result}`)
  return result;
}


export {
  addItemToCart,
  deleteItemFromCart,
  removeItemFromCart,
  viewCartItems,
  totalCartItems
}