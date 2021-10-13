module.exports = (io) => io.on('connection', (socket) => {
    socket.on('clientMessage', (message) => {
        console.log(`Mensagem ${message}, emitida por ${socket.id}`);
        io.emit('serverMessage', message)
      });
});