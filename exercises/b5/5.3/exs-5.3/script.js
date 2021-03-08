function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

function createDaysOfTheMonth() {
  const daysUl = document.getElementById('days');
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (let i = 0; i < dezDaysList.length; i += 1) {
    const specificDay = document.createElement('li');
    specificDay.innerHTML = dezDaysList[i];
    specificDay.className += 'day ';
    if (specificDay.innerHTML === '25' || specificDay.innerHTML === '24' || specificDay.innerHTML === '31') {
      specificDay.className += 'holiday ';
    }
    if (specificDay.innerHTML === '4' || specificDay.innerHTML === '11' || specificDay.innerHTML === '18' || specificDay.innerHTML === '25') {
      specificDay.className += 'friday ';
    }
    daysUl.appendChild(specificDay);
  }
}
createDaysOfTheMonth();

function criarBotaoFeriado(param) {
  const botaoConteiner = document.getElementsByClassName('buttons-container')[0];
  const botaoFeriados = document.createElement('button');
  botaoFeriados.id = 'btn-holiday';
  botaoFeriados.innerText = param;
  botaoConteiner.appendChild(botaoFeriados);
}
criarBotaoFeriado('Feriados');

const botaoFeriado = document.getElementById('btn-holiday');
botaoFeriado.addEventListener('click', FeriadoTrocaCor);
const newColor = 'purple';
const standardColor = 'rgb(238,238,238)';

function FeriadoTrocaCor() {
  diasDeFeriado = document.getElementsByClassName('holiday');
  for (const i in [diasDeFeriado]) {
    const diaComFeriado = diasDeFeriado[i];
    if (diaComFeriado.style.backgroundColor === newColor) {
      diaComFeriado.style.backgroundColor = standardColor;
    } else {
      diaComFeriado.style.backgroundColor = newColor;
    }
  }
}

function sexta(param) {
  const botaoSexta = document.createElement('button');
  const containerButton = document.getElementsByClassName('buttons-container')[0];
  containerButton.appendChild(botaoSexta);
  botaoSexta.id = 'btn-friday';
  botaoSexta.innerText = param;
}
sexta('Sexta-feira');

const botaoSexta = document.getElementById('btn-friday');
botaoSexta.addEventListener('click', clickToSexta);
let originColor = true;
const dezFridays = [4, 11, 18, 25];
function clickToSexta() {
  diasDeSexta = document.getElementsByClassName('friday');
  for (i = 0; i < diasDeSexta.length; i += 1) {
    if (originColor === true) {
      diasDeSexta[i].innerText = 'SEXTOU!';
    } else {
      diasDeSexta[i].innerText = dezFridays[i];
    }
  }
  if (originColor === true) {
    originColor = false;
  } else {
    originColor = true;
  }
}

const days = document.getElementById('days');
days.addEventListener('mouseover', zoom);
days.addEventListener('mouseout', zoomOut);
function zoom(event) {
  event.target.style.fontSize = '30px';
}

function zoomOut(event) {
  event.target.style.fontSize = '20px';
}

days.addEventListener('click', (event) => {
  const tarefaColor = document.getElementsByClassName('task')[0];
  event.target.style.backgroundColor = tarefaColor.style.backgroundColor;
});

function newTask(task) {
  const myTasks = document.getElementsByClassName('my-tasks')[0];
  const cozinhar = document.createElement('span');
  cozinhar.innerHTML = task;
  myTasks.appendChild(cozinhar);
}
newTask('Cozinhar');

function addSubtitles(color) {
  const tarefa = document.getElementsByClassName('my-tasks')[0];
  const novaTarefa = document.createElement('div');
  novaTarefa.className = 'task';
  tarefa.appendChild(novaTarefa);
  novaTarefa.style.backgroundColor = color;
}
addSubtitles('purple');

const tarefa = document.getElementsByClassName('task')[0];
tarefa.addEventListener('click', clickTarefa);
let verificador = true;

function clickTarefa() {
  if (verificador === true) {
    tarefa.className = 'task selected';
    verificador = false;
  } else {
    tarefa.className = 'task';
    verificador = true;
  }
}
