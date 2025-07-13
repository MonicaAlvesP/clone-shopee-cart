# Clone do Carrinho de Compras da Shopee

Projeto desenvolvido para replicar as funcionalidades básicas do carrinho de compras da Shopee, com cálculo automático de subtotais e gerenciamento de itens.

## Objetivo

Criar um sistema de carrinho de compras funcional que permita:

- Adicionar itens ao carrinho
- Remover itens do carrinho
- Calcular subtotais automaticamente
- Gerenciar quantidades de produtos
- Exibir o total geral do carrinho

## 🔧 Tecnologias Utilizadas

- **JavaScript ES6+**: Linguagem principal
- **Node.js**: Ambiente de execução
- **ES Modules**: Sistema de módulos
- **Async/Await**: Programação assíncrona
- **Jest**: Framework de testes

### Entidades

- **Carrinho (`cart.js`)**: Responsável por todas as operações do carrinho
- **Itens (`item.js`)**: Responsável pela criação e estrutura dos produtos

## Funcionalidades Implementadas

### Gerenciamento do Carrinho (`cart.js`)

- `addItemToCart()` - Adiciona item ao carrinho
- `deleteItemFromCart()` - Remove item completamente do carrinho por nome
- `removeItemFromCart()` - Remove uma unidade ou item completo baseado na quantidade
- `viewCartItems()` - Exibe todos os itens do carrinho formatados
- `totalCartItems()` - Calcula e exibe o valor total do carrinho
- `clearCart()` - Limpa todo o carrinho (a implementar)

### Criação de Itens (`item.js`)

- `createItem()` - Cria um novo produto com:
  - Nome do produto
  - Preço unitário
  - Quantidade
  - Função `subtotal()` para cálculo automático

## 🧪 Testes

O projeto inclui testes automatizados para garantir a qualidade do código:

### Estrutura de Testes

```
tests/
├── item.test.js    # Testes para criação de itens
└── cart.test.js    # Testes para operações do carrinho
```

### Cobertura de Testes

- ✅ Criação de itens com propriedades corretas
- ✅ Adição de itens ao carrinho
- ✅ Remoção de itens do carrinho
- ✅ Exclusão de itens por nome
- ✅ Cálculo do total do carrinho
- ✅ Exibição de itens do carrinho

### Executar Testes

```bash
# Rodar todos os testes
npm test

# Rodar testes em modo watch
npm run test:watch
```

## Como Executar

### Pré-requisitos

- Node.js instalado
- NPM ou Yarn

### Instalação e Execução

1. Clone o repositório:

```bash
git clone https://github.com/MonicaAlvesP/clone-shopee-cart.git
cd clone-shopee-cart
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto:

```bash
npm run dev
```
