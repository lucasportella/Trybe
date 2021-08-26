const fs = require('fs').promises;
const express = require('express');
const rescue = require('express-rescue')
const app = express();

const nomeDoArquivo = './simpsons.json'

const getSimpsons = () => fs.readFile(nomeDoArquivo, 'utf8').then((file) => JSON.parse(file));

const setSimpsons = (newSimpsons) => fs.writeFile(nomeDoArquivo, JSON.stringify(newSimpsons));


app.get('/simpsons', rescue(async (req, res) => {
    res.status(200).json(await getSimpsons())
}));

app.get('/simpsons/:id', rescue(async (req, res) => {
    const simpsons = await getSimpsons();
    const findSimpson = simpsons.find((simpson) => simpson.id === req.params.id )
    if (findSimpson) {
        res.status(200).json(findSimpson)
    } else {
        res.status(404).send('404 - Not Found')
    }
}))

app.post('/simpsons')

app.listen(3000, () => {
    console.log('Ouvindo na porta 3000');
})