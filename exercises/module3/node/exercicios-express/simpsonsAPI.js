const fs = require('fs').promises;
const express = require('express');
const rescue = require('express-rescue')
const bodyParser = require('body-parser');
const app = express();

const nomeDoArquivo = './simpsons.json'

app.use(bodyParser.json());

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

app.post('/simpsons', rescue(async (req, res) => {
    const simpsons = await getSimpsons();
    const newSimpson = {id: req.body.id, name: req.body.name};
    const addSimpson = simpsons.find((simpson) => simpson.name === newSimpson.name && simpson.id === newSimpson.id);
    if (!addSimpson) {
        simpsons.push(newSimpson);
        await setSimpsons(simpsons);
        res.status(204).end();
    } else {
        res.status(409).json({message: "id already exists"})
    }
}))

app.listen(3000, () => {
    console.log('Ouvindo na porta 3000');
})