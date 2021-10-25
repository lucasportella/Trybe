const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 3001;

const http = require('http').createServer(app)
app.use(express.json());

const io = require('socket.io')(http, {
    cors: {
        origin: `http://localhost:${PORT}`,
        methods: ['GET', 'POST']
    }
})

app.use(cors())

io.on('connection', (socket) => {
    console.log(`Usuário conectado. ID: ${socket.id}`);
})

app.get('/', (req, res) => {
    res.status(200).json('Olá')
})

http.listen(PORT, () => console.log(`Server na porta ${PORT}`));