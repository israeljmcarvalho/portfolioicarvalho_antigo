// Importa o express
const express = require('express');

//Instanciando um objeto da classe Router do Express
const router = express.Router();

//Importa o arquivo polls.controller.js
const pollsController = require('../Controllers/polls.controller');

router.get('/findOne/:id', pollsController.findOne);
//router.get('/result');

module.exports = router;