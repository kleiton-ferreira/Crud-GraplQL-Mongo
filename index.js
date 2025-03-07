require('dotenv').config(); // Carrega variáveis do .env
const express = require('express'); // Importa o Express
const { graphqlHTTP } = require('express-graphql'); // Middleware GraphQL
const mongoose = require('mongoose'); // Conectar ao MongoDB
const schema = require('./schema/schema'); // Importa o Schema
const resolvers = require('./resolvers/resolvers'); // Importa os Resolvers

const app = express(); // Inicializa o servidor Express

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Conectado ao MongoDB"))
  .catch(err => console.error("❌ Erro ao conectar ao MongoDB:", err));

// Configuração do servidor GraphQL
app.use('/graphql', graphqlHTTP({
  schema,              // Define o Schema GraphQL
  rootValue: resolvers, // Define os Resolvers
  graphiql: true       // Ativa a interface gráfica do GraphQL
}));

// Inicia o servidor na porta 4000
app.listen(4000, () => console.log("🚀 Servidor rodando em http://localhost:4000/graphql"));
