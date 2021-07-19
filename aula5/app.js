const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'textte.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

// const pessoas = [
//     { nome: 'João'},
//     { nome: 'Maria'},
//     { nome: 'Eduardo'},
//     { nome: 'Luiza'},
// ];
// const json = JSON.stringify(pessoas, '', 2);
// ecreve(caminhoArquivo, json);

async function lerAquivo(caminho) {
    const dados = await ler (caminho);
  rederizaDados(dados);
}

function renderizaDados(dados) {
    dados = Json.parse(dados);
    dados.forEach(val => console.log(val));
}
lerAquivo(caminhoArquivo);


