// Defina os parâmetros
const numbers = [1, 2, 3, 4, 5];
const metric = 'mean';

// URL da API
const apiUrl = 'http://127.0.0.1:9999/operation'; // Coloque a URL correta da sua API aqui

// Crie o corpo da requisição
const requestBody = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ numbers, metric }),
};

// Faça a requisição usando Fetch
fetch(apiUrl, requestBody)
    .then(response => response.json())
    .then(result => {
        console.log(result); // Faça algo com a resposta da API
    })
    .catch(error => {
        console.error('Erro ao chamar a API:', error);
    });
