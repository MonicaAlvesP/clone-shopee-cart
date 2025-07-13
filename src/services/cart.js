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

// -> adicionar item aos favoritos
async function addToWishList(userWishList, item) {
  const existingItem = userWishList.find(wishItem => wishItem.name === item.name)

  if (existingItem) {
    console.log(`${item.name} já está na lista de desejos`)
    return
  }

  userWishList.push(item)
  console.log(`❤️ ${item.name} foi adicionado aos favoritos!`)
}

// -> remover item dos favoritos
async function removeFromWishList(userWishList, itemName) {
  const index = userWishList.findIndex(item => item.name === itemName)

  if (index !== -1) {
    const removedItem = userWishList.splice(index, 1)[0]
    console.log(`💔 ${removedItem.name} foi removido dos favoritos`)
  } else {
    console.log("Item não encontrado na lista de desejos")
  }
}

// -> ver lista de desejos
async function viewWishList(userWishList) {
  console.log("❤️ Lista de Desejos:")

  if (userWishList.length === 0) {
    console.log("Lista de desejos vazia")
    return
  }

  userWishList.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - R$ ${item.price}`)
  })
}


export {
  addItemToCart,
  deleteItemFromCart,
  removeItemFromCart,
  viewCartItems,
  totalCartItems,
  addToWishList,
  removeFromWishList,
  viewWishList
}