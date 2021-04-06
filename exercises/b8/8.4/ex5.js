
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((as, nome, index, array) => {
    for (let i = 0; i < nome.length; i += 1){
   if (nome[i] === 'A' || nome[i] === 'a')  {as += 1};
  }
   return as;
  }, 0)
}

assert.deepStrictEqual(containsA(), 20);