const fs = require('fs');
const writting = (nomeDoArquivo, ConteudoDoArquivo) => {
    try {
        fs.writeFileSync(`${__dirname}/${nomeDoArquivo}`, ConteudoDoArquivo)
        return 'ok';
    }
    catch (err) {
        return null;
    }
}

module.exports = writting;