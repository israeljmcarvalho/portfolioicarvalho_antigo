// pq arquivos de Controllers não precisa importar express?

// Importa o arquivo polls.model.js
const pollsModel = require('../Models/polls.model');
const { DefaultResponse } = require('../Utils/default.response');

//findOne é um método da classe pollsControler e como tem que ser acessado externamente 
// esta função precisa ser "exportada" conforme linha abaixo. Ou seja, o método findOne está
// disponível fora deste contexto "classe polls.controller.js"

var x = () => {
    return 1
}

var x = [1,2,3,4,5];

var filtered_array = x.filter((num) => {
    teste()
    return (num > 3)
}) 
var f2 = []
for (let index = 0; index < x.length; index++) {
    let element[index] = x[index];
    // element[0] == 1
    // element[1] == 2
    var z = element[index] + element[index - 1]
    if(x[index] > 3){
        f2.push(x[index]);
    }
}

const _var1
var _var2
let _var3

const teste = () => {

}


exports.findOne = (req, res) =>{
    try {
        // armazena na variável id o id da requisição.
        // sempre que se quer acessar um atributo da requisição (requisição é um objeto),
        // deve-se usar o params ?
        var id = req.params.id;

        // armazena na variável result o resultado da função findOne do arquivos poll.Model.js
        // mas, e o exports?
        var result = pollsModel.findOne(id);

        // porque verificar se result > 0 ?o certo não seria verificar se a variável
        // result está vazia ou não?       
        if(result > 0){

            // atribui 0 valor 200 para o status da resposta bem como retorna o json com a msg
            // que deu certo e também o valor da variável result
            return res.status(200).json({
                ...DefaultResponse(),
                message: "Deu tudo certo",
                data: result
            })
        }
        
        // o status do retorno seria 200 mesmo?
        return res.status(200).json({
            message: "Nenhum registro encontrado",

            // ???
            result: [] 
        })
        
    } catch (error) {
        console.log(error)  
        return res.status(500).json({
            message: error.message
        })
    }
}