const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send(`
    <form action="/" metho="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Olá mundo</button>
    </form>
    `);    
});

app.get('/testes/:idUsuarios?', (req, res) => {
    console.log(req.params);
    res.send(req.params);

});
app.post('/', (req, res) => {
    res.send('Recebi o formulário');
});

app.listen(3333, () => {
    console.log('Acessar http://localhost:3333');
    console.log('Servidor executando na porta 3333');
});