const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send('Hello world!');
});
app.listen(3333, () => {
    console.log('Acessar http://localhost:3333');
    console.log('Servidor executando na porta 3333');
});