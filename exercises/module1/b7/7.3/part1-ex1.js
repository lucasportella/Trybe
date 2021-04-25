const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
assert.strictEqual(sum(4,'5'),0, 'cálculo errado')

// implemente seus testes aqui