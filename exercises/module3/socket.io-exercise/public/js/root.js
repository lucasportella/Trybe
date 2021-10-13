const socket = window.io();

const button = document.querySelector('#likeIcon');

button.addEventListener('click', (e) => {
    socket.emit('sinal enviado pelo botão!')
    return false;
})