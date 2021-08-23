const fs = require('fs').promises;

const addNewSimpson = async () => {
    const simpsonFamily = JSON.parse(await fs.readFile('./simpsonFamily.json', 'utf8'));
    simpsonFamily.push({id: String(simpsonFamily.length + 1), name: 'Nelson Muntz'})
    fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamily))
}
addNewSimpson()