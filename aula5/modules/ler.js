const fs = require('fs').promises;

module.exports = (caminho) => fs.readFile(camimho, 'utf8');