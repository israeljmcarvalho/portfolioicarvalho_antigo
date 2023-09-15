//importa o express
const express = require('express');
//instancia express na variavel app
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(require('./Routes'))

app.listen(process.env.CLUSTER_BACK_PORT, (err) => {
    if(err){
        console.log('ERROR:::', err);
    }
    console.log(`Working.... ${process.env.CLUSTER_BACK_PORT}`);
})