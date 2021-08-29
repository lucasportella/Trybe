const express = require('express');
const bodyParser = require('body-parser');
const {authMiddleware, fieldMiddleware} = require('./authMiddleware')

const app = express();

app.use(bodyParser.json());

const pingPong = (req, res) => {
    res.status(200).json({message: 'pong'})
}

app.use(authMiddleware)
app.use(fieldMiddleware)

app.get('/ping', pingPong);

app.post('/hello', (req, res) => {
    res.status(200).json({"message": `Hello, ${req.body.name}!`})
})

app.post('/greetings', (req, res) => {
    if (req.body.age > 17) {
        res.status(200).json({"message": `Hello, ${req.body.name}`})
    } else {
        res.status(401).json({"message": "Unauthorized"})
    }
})

app.put('/users/:name/:age', (req, res) => {
    res.status(200).json({"message": `Seu nome é ${req.params.name} e você tem ${req.params.age} anos de idade.`})
})


app.use((err, req, res, next) => res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`))

app.listen(3000, () => {
    console.log('Ouvindo aplicação na porta 3000!')
})

