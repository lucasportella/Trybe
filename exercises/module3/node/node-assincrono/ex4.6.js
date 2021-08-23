const fs = require('fs').promises;
const arquivo = 'simpsonFamily.json';
const changeSimpson = async () => {
    const simpsonFamily = JSON.parse( await fs.readFile(arquivo, 'utf8'))
    const newSimpsonFamily = simpsonFamily.map((simpson) => {
        if (simpson.id === "6") {
            return {"id": simpson.id, "name": "Maggie Simpson"}
        } return simpson
    })
    fs.writeFile(arquivo, JSON.stringify(newSimpsonFamily))
}
changeSimpson()