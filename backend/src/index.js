// Importar todas as funcionalidades do framework express para constante express
const express = require('express');
const cors = require('cors');

// Importar rotas do routes.js
const routes = require('./routes');

// Criar constante que vai armazenar a aplicaçao - Instanciar a aplicacao
const app = express();

app.use(cors()); // Permissao de acesso ao backend

// Informar ao express que utilizaremos json para as requisicoes
app.use(express.json());

// Usar rotas
app.use(routes);

// Acessar a aplicacao pela porta 3333
app.listen(3333);