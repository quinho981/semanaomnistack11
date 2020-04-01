const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// Atribuindo o modulo de rotas do express à uma constante
const routes = express.Router();

routes.post('/sessions', SessionController.create) // Verificar login

routes.get('/ongs', OngController.index); // Listar todas as ongs
routes.post('/ongs', OngController.create); // Criar ong no bdd

routes.get('/profile', ProfileController.index); // Lista casos especificos

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

// Exportar rotas
module.exports = routes;