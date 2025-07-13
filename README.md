# Clone do Carrinho de Compras da Shopee

Projeto para replicar as funcionalidades básicas do carrinho de compras da Shopee, incluindo cálculo automático de subtotais e gerenciamento de itens.

## Objetivo

Criar um sistema de carrinho de compras funcional que permita:

- Adicionar e remover itens
- Calcular subtotais e total geral automaticamente
- Gerenciar quantidades de produtos

## 🔧 Tecnologias Utilizadas

- **JavaScript ES6+**
- **Node.js**
- **ES Modules**
- **Async/Await**
- **Jest**

### Entidades

- **Carrinho (`cart.js`)**: Operações do carrinho
- **Itens (`item.js`)**: Estrutura dos produtos

## ⚙️ Funcionalidades

### 🛒 Carrinho (`cart.js`)

- `addItemToCart()` - Adiciona item
- `deleteItemFromCart()` - Remove item por nome
- `removeItemFromCart()` - Remove unidade ou item completo
- `viewCartItems()` - Exibe itens formatados
- `totalCartItems()` - Calcula valor total

### ❤️ Lista de Desejos

- `addToWishList()` - Adiciona aos favoritos
- `removeFromWishList()` - Remove dos favoritos
- `viewWishList()` - Exibe itens da lista

### 📦 Itens (`item.js`)

- `createItem()` - Cria produto com nome, preço, quantidade e função `subtotal()`

## 🧪 Testes

O projeto inclui testes automatizados para garantir a qualidade do código.

```
tests/
├── item.test.js    # Teste de criação de itens
└── cart.test.js    # Testes das principais funcionalidades
```

- Criação de itens com propriedades corretas
- Operações do carrinho (adicionar, remover, deletar)
- Cálculo do total do carrinho
- Gerenciamento da lista de desejos

### Executar Testes

```bash
npm test
npm run test:watch
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (16+)
- NPM ou Yarn

### Instalação e Execução

```bash
git clone https://github.com/MonicaAlvesP/clone-shopee-cart.git
cd clone-shopee-cart
npm install
npm run dev
```

Para rodar os testes:

```bash
npm test
```
