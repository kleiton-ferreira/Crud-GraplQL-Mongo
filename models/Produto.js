const mongoose = require('mongoose'); // Importa o Mongoose para modelagem do banco

// Define a estrutura do documento Produto no MongoDB
const ProdutoSchema = new mongoose.Schema({
  nome: { type: String, required: true },   // Nome do produto (obrigatório)
  preco: { type: Number, required: true },  // Preço do produto (obrigatório)
  estoque: { type: Number, required: true } // Quantidade em estoque (obrigatório)
});

// Exporta o modelo para ser usado nos resolvers
module.exports = mongoose.model('Produto', ProdutoSchema);
