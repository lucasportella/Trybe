let customize = 5;
let getBody = document.getElementsByTagName('body')[0];
for (i = 0; i < customize; i += 1) {
    let newButton = document.createElement('button');
    newButton.id = `botao${i+1}`
    newButton.innerText = 'texto'
    getBody.appendChild(newButton);
}

let bgColor = document.getElementById('botao1');
let txtColor = document.getElementById('botao2');
let fontSize = document.getElementById('botao3');
let lineHeight = document.getElementById('botao4');
let fontFamily = document.getElementById('botao5');


bgColor.innerText = 'bg-color-red'
bgColor.addEventListener('click',changeBgColor)
function changeBgColor() {
    getBody.style.backgroundColor = "red";
    localStorage.setItem("backgroundColor", "red");
}