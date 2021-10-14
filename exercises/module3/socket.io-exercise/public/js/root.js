const socket = window.io();
const span = document.querySelector('#likeIcon');
let currentLikes = document.querySelector('#currentLikes');

const spanStar = document.querySelector('#starIcon')
let currentStars = document.querySelector('#currentStars')

span.addEventListener('click', (e) => {
    const likes = Number(currentLikes.textContent)
    socket.emit('like', likes)
})

spanStar.addEventListener('click', (e) => {
    const stars = Number(currentStars.textContent);
    socket.emit('star', stars)
})

socket.on('addStar', (updatedStars) => {
    currentStars.textContent = String(updatedStars)
})

socket.on('addLike', (updatedLikes) => {
    currentLikes.textContent = String(updatedLikes)
})