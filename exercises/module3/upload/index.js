const express = require('express');
const multer = require('multer')
const axios = require('axios')
const fs = require('fs')
const FormData = require('form-data');

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads/');
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + '-' + file.originalname)
    },
})

const upload = multer({storage})

app.use(express.static(__dirname + '/public'))

app.post('/upload', upload.single('arquivo'), (req, res) => {
    console.log(req.file);
    res.send(req.file)
})

app.get('/ping', (req, res) => {
    res.json('pong')
})

app.post('/uploads', (req, res) => {
    res.status(200).json()
})

const stream = fs.createReadStream('./ccc.txt')
const form = new FormData();
form.append('file', stream)
const formHeaders = form.getHeaders()

axios.post('http://localhost:3000/uploads/', form, {
headers: {
    ...formHeaders,
}
}).then((resp) => {
    console.log(resp);
}).catch((error) => {
    console.log(error);
})

app.listen(3000, () => console.log('rodando na porta 3000'))

