// Importa o express
const express = require('express');

//Instanciando um objeto da classe Router do Express
const router = express.Router();

//Importa o arquivo polls.controller.js
const pollsController = require('../Controllers/polls.controller');

// o objeto criado na linha 5 está utilizando o método get da classe Router do Express
// passando como parâmeto uma rota e chamando o método findOne do arquivo pollsController
router.get('/findOne/:id', pollsController.findOne);


// pq precisa exportar???
module.exports = router;