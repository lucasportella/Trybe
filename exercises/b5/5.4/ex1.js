const customize = 5;
const getBody = document.getElementsByTagName('body')[0];
for (i = 0; i < customize; i += 1) {
  const newButton = document.createElement('button');
  newButton.id = `botao${i + 1}`;
  newButton.innerText = 'texto';
  getBody.appendChild(newButton);
}

const bgColor = document.getElementById('botao1');
bgColor.innerText = 'bg-color-red';

const txtColor = document.getElementById('botao2');
const fontSize = document.getElementById('botao3');
const lineHeight = document.getElementById('botao4');
const fontFamily = document.getElementById('botao5');

function changeBgColor(color) {
  bgColor.addEventListener('click', function() {
    getBody.style.backgroundColor = color;
   backStore = localStorage.setItem('backgroundColor', color);
  });
}

changeBgColor('green');

function initialize() {
  let backStore = localStorage.getItem('backgroundColor');
  if (backStore) {
  changeBgColor(backStore);
} }

initialize()
