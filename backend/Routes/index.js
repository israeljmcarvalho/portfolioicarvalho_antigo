//Importa express
const express = require('express')
// pq é necessário importar o express?
//todo arquivo de rota precisa importar o express?
// pq arquivos de models não precisa importar express?
// pq arquivos de controllers não precisa importar express?

//Instanciando um objeto da classe Router do Express
const router = express.Router()

// Importa o arquivo polls.route.js
const pollsRoutes = require('./polls.route')

//o que esta linha faz?
router.use('/polls', pollsRoutes)

module.exports = router;