const fs = require('fs/promises');

const nomeDoArquivo = './simpsons.json';
fs.readFile(nomeDoArquivo, 'utf-8', (err, data) => {
    console.log('aaaa');
}).then((r) => console.log(r))