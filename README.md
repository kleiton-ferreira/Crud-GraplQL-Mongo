# Crud-GraplQL-Mongo

# Instruções para Rodar o Projeto

## 1. Rodar o Projeto

- **Crie uma conexão no MongoDB**.
- Abra o projeto no **VS Code**.
- No terminal, digite o comando `node index.js` e pressione **Enter**.
- Se não funcionar, instale as dependências, pelo terminal, com o comando:
  npm install express express-graphql graphql mongoose dotenv
  
## 2. Acessar o Projeto no Navegador
- Abra o navegador e acesse a seguinte URL:
  http://localhost:4000/graphql

## 3. CRIAR UM NOVO PRODUTO
mutation {
  criarProduto(nome: "Notebook", preco: 4500.99, estoque: 10) {
    id
    nome
  }
}


## 4. CONSULTAR TODOS OS PRODUTOS
query {
  produtos {
    id
    nome
    preco
    estoque
  }
}


## 5. CONSULTAR PRODUTO POR ID
query {
  produto(id: "ID_DO_PRODUTO") {
    nome
    preco
    estoque
  }
}



## 6. ATUALIZAR UM PRODUTO
mutation {
  atualizarProduto(id: "ID_DO_PRODUTO", preco: 4000.00) {
    id
    nome
    preco
  }
}


## 7. DELETAR UM PRODUTO
mutation {
  deletarProduto(id: "ID_DO_PRODUTO")
}


## 8. DELETAR TODOS OS PRODUTOS
mutation {
  deletarTodosProdutos
}
