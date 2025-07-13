// CASOS DE USO DOS ITEMS:
// -> item com subtotal correto

async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    subtotal: () => price * quantity
  }
}

async function addToItemInWishList(wishList, item) {
  const existingItem = wishList.find(i => i.name === item.name);
  if (existingItem) {
    existingItem.quantity += item.quantity;
  } else {
    wishList.push(item);
  }
  console.log(`Item ${item.name} adicionado à lista de desejos.`);
  return wishList;
}

export {
  createItem,
  addToItemInWishList
}