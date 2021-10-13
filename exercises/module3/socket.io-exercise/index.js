const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http').createServer(app);


const io = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    }
})

app.use(cors());

app.use(express.static(__dirname + '/public'))

io.on('connection', (socket) => {
    console.log(`Usuário ${socket.id} conectado!`);

})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

http.listen(3000, () => {
    console.log('Ouvindo na porta 3000');
})