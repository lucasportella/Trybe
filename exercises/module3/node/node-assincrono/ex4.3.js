const fs = require('fs').promises;

const deleteSimpsons = async () => {
    const simpsons = JSON.parse(await fs.readFile('/home/lucas/Downloads/simpsons.json', 'utf8'))
    const newSimpsons = simpsons.filter((simpson) => simpson.id !== "10" && simpson.id !== "6");
    fs.writeFile('./newSimpsons.json', JSON.stringify(newSimpsons))
}
deleteSimpsons()