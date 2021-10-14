const socket = window.io();
const span = document.querySelector('#likeIcon');
let currentLikes = document.querySelector('#currentLikes');

span.addEventListener('click', (e) => {
    const likes = Number(currentLikes.textContent)
    console.log(likes);
    socket.emit('like', likes)
})

socket.on('addLike', (updatedLikes) => {
    currentLikes.textContent = String(updatedLikes)
})