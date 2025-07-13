import createItem from '../src/services/item.js'

describe('Testes do Serviço de Item', () => {
  test('deve criar um item com as propriedades corretas', async () => {
    const item = await createItem("Tênis Nike", 299.99, 2)

    expect(item).toHaveProperty('name', 'Tênis Nike')
    expect(item).toHaveProperty('price', 299.99)
    expect(item).toHaveProperty('quantity', 2)
    expect(item).toHaveProperty('subtotal')
    expect(typeof item.subtotal).toBe('function')
  })
})
