const funcs = require('./funcs.js')

test('default return 10', () => {
  funcs.randomNumber = jest.fn().mockReturnValue(10);
  funcs.randomNumber();
  expect(funcs.randomNumber).toHaveBeenCalled();
  expect(funcs.randomNumber()).toBe(10);
  expect(funcs.randomNumber).toHaveBeenCalledTimes(2);
})

