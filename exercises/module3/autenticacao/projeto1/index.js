const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/ping', (req, res) => {
    console.log(req.body)
    res.status(200).json({ message: 'Pong!' });
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});