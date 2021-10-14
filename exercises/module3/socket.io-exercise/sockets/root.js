module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log(`Usuário ${socket.id} conectado!`);
    socket.on('like', (currentLikes) => {
        const updatedLikes = currentLikes + 1
        io.emit('addLike', updatedLikes)
    })
    })
}