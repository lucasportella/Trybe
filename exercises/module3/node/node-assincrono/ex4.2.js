const fs = require('fs').promises;
const arquivo = 'simpsons.json';

const findSimpson = async (id) => {
    const simpsonsArray = JSON.parse(await fs.readFile(`/home/lucas/Downloads/${arquivo}`, 'utf8'));
    const chosenSimpson = simpsonsArray.find((simpson) => simpson.id === id);
    if (!chosenSimpson) {
        throw new Error('id não encontrado');
    }
    return chosenSimpson
}
findSimpson(3).then((result) => console.log(result))
