const fs = require('fs').promises;
const arquivo = 'simpsons.json';

const simpsonsFunc = async () => {
    const simpsonsArray = JSON.parse(await fs.readFile(`/home/lucas/Downloads/${arquivo}`, 'utf8'));
    for (let index = 0; index < simpsonsArray.length; index++) {
        console.log(`${index} - ${simpsonsArray[index].name}`)
    }
}
simpsonsFunc()