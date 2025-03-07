const { buildSchema } = require('graphql'); // Importa função para criar o Schema

// Definição do Schema GraphQL
const schema = buildSchema(`
  # Definição do tipo Produto, refletindo a estrutura do banco
  type Produto {
    id: ID!           # Identificador único gerado pelo MongoDB
    nome: String!     # Nome do produto (não pode ser nulo)
    preco: Float!     # Preço (float para permitir valores decimais)
    estoque: Int!     # Quantidade disponível em estoque
  }

  # Definição das queries (consultas de dados)
  type Query {
    produtos: [Produto]       # Retorna uma lista com todos os produtos
    produto(id: ID!): Produto # Retorna um produto específico pelo ID
  }

  # Definição das mutations (alterações no banco de dados)
  type Mutation {
    criarProduto(nome: String!, preco: Float!, estoque: Int!): Produto             # mutation para criar um produto
    atualizarProduto(id: ID!, nome: String, preco: Float, estoque: Int): Produto   # mutation para atualizar um produto
    deletarProduto(id: ID!): String                                                # mutation para deletar um produto
    deletarTodosProdutos: String                                                   # mutation para deletar todos os produtos
  }
`);

module.exports = schema;
