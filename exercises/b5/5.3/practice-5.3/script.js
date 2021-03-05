let caixaTexto = window.document.getElementsByClassName('caixa-texto');
let caixa1 = window.document.getElementsByClassName('caixa1')[0];
let caixa2 = window.document.getElementsByClassName('caixa2')[1];
let botao1 = window.document.getElementsByClassName('botao1')[0];
let botao2 = window.document.getElementsByClassName('botao1')[1];

function corVerde(param) {
  console.log(param)
  param.style.backgroundColor = "green";
}

caixa1.addEventListener('click', corVerde);