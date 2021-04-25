let caixaTexto = window.document.getElementsByClassName('caixa-texto');
let caixa1 = window.document.getElementsByClassName('caixa1')[0];
let caixa2 = window.document.getElementsByClassName('caixa2')[0];
let botao1 = window.document.getElementsByClassName('botao1')[0];
let botao2 = window.document.getElementsByClassName('botao2')[0];

function corVerde(parametro) {
  parametro.target.style.backgroundColor = "green";
  console.log(parametro);
}

caixa1.addEventListener('click', corVerde);
caixa2.addEventListener('click', corVerde);
botao1.addEventListener('click', corVerde);
botao2.addEventListener('click', corVerde);

