const express = require('express');
const app = express();

//          Criar   ler   atualizar  apagar 
//  CRUD -> CREATE, READ, UPDATE,    DELETE
//          POST    GET   PUT        DELETE

app.get('/', (req, res) => {
    res.send(`
    <form action="/" metho="POST">
    Nome do cliente; <inpu type="text" name="nome">
    <button>Olá mundo</button>
    </form>
    `);
});
app.listen(3333, () => {
    console.log('Acessar http://localhost:3333');
    console.log('Servidor executando na porta 3333');
});