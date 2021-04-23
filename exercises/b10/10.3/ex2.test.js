const funcs = require('./ex1.test');
test('new implementation', () => {
  funcs.randomNumber = jest.fn().mockImplementationOnce((a,b) => a / b)
  funcs.randomNumber(4,2);
  expect(funcs.randomNumber).toHaveBeenCalled();
  expect(funcs.randomNumber).toHaveBeenCalledWith(4,2);
})