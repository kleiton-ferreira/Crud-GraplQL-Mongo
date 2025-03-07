const Produto = require('../models/Produto'); // Importa o modelo Produto

// Definição dos resolvers com as funções de manipulação dos dados
const resolvers = {
  // Retorna todos os produtos cadastrados
  produtos: async () => {
    try {
      return await Produto.find(); // Busca todos os produtos no MongoDB
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      throw new Error("Erro ao buscar produtos.");
    }
  },

  // Retorna um único produto pelo ID
  produto: async ({ id }) => {
    try {
      return await Produto.findById(id); // Busca um produto pelo ID
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
      throw new Error("Produto não encontrado.");
    }
  },

  // Cria um novo produto no banco de dados
  criarProduto: async ({ nome, preco, estoque }) => {
    try {
      const produto = new Produto({ nome, preco, estoque }); // Cria uma instância do Produto
      return await produto.save(); // Salva no banco
    } catch (error) {
      console.error("Erro ao criar produto:", error);
      throw new Error("Erro ao criar produto.");
    }
  },

  // Atualiza um produto existente pelo ID
  atualizarProduto: async ({ id, nome, preco, estoque }) => {
    try {
      return await Produto.findByIdAndUpdate(
        id, 
        { nome, preco, estoque }, 
        { new: true } // Retorna o produto atualizado
      );
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
      throw new Error("Erro ao atualizar produto.");
    }
  },

  // Deleta um produto pelo ID
  deletarProduto: async ({ id }) => {
    try {
      await Produto.findByIdAndDelete(id);
      return "Produto removido com sucesso!";
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
      throw new Error("Erro ao deletar produto.");
    }
  },

  deletarTodosProdutos: async () => {
    try {
      await Produto.deleteMany({}); // Remove todos os produtos
      return "Todos os produtos foram removidos com sucesso!";
    } catch (error) {
      console.error("Erro ao deletar todos os produtos:", error);
      throw new Error("Erro ao deletar todos os produtos.");
    }
  }
};

module.exports = resolvers;
