const fs = require('fs').promises;
const arquivoNovo = 'simpsonFamily.json';

const createSimpsonsFamily = async () => {
    const allSimpsons = JSON.parse(await fs.readFile('/home/lucas/Downloads/simpsons.json', 'utf8'));

    const simpsonsFamily = allSimpsons.filter((simpsons) => ["1", "2", "3", "4", "5"].includes(simpsons.id));

    fs.writeFile(arquivoNovo, JSON.stringify(simpsonsFamily));
}
createSimpsonsFamily()
