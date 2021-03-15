const statesContainer = document.querySelectorAll('select')[0];
let states = [
    'Selecione seu Estado',
    'AC - Acre',
    'AL - Alagoas',
    'AP - Amapá',
    'AM - Amazonas',
    'BA - Bahia',
    'CE - Ceará',
    'DF - Distrito Federal',
    'ES - Espírito Santo',
    'GO - Goiás',
    'MA - Maranhão',
    'MT - Mato Grosso',
    'MS - Mato Grosso do Sul',
    'MG - Minas Gerais',
    'PA - Pará',
    'PB - Paraíba',
    'PR - Paraná',
    'PE - Pernambuco',
    'PI - Piauí',
    'RJ - Rio de Janeiro',
    'RN - Rio Grande do Norte',
    'RS - Rio Grande do Sul',
    'RO - Rondônia',
    'RR - Roraíma',
    'SC - Santa Catarina',
    'SP - São Paulo',
    'SE - Sergipe',
    'TO - Tocantins'
    ];
let data = [];

for (let i in states) {
    let state = document.createElement('option');
    state.value = states[i];
    state.innerText = states[i];
    states.index
     statesContainer.appendChild(state);
}

function getSendButton(){
    const sendButton = window.document.getElementById('botao-enviar');
    sendButton.addEventListener('click', () => {
        inputDate = window.document.getElementById('data').value;
        verifyDate(inputDate);
    })
}
getSendButton();

const clearButton = window.document.getElementById('bota-limpar');

function verifyDate(data) {
    const dataIn = data;
    if (dataIn.indexOf('/', 2) === 2 && dataIn.indexOf('/', 5) === 5) {
        const day = parseInt(dataIn.substr(0,2));
        const month = parseInt(dataIn.substr(3,5));
        const year = parseInt(dataIn.substr(6,10));
        if (day >= 1 & day <= 31 & month >= 1 & month <= 12 & year >= 0) {
            storeData(dataIn)
        } else {
            alert('Dados inválidos')
        }  

    } else {
        alert('Dados inválidos')
    }
}

function storeData (param) {
    data.push(param)
}