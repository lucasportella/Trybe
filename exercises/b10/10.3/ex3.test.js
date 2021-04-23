const funcs = require('./funcs');

test('new implementations', () => {
  funcs.randomNumber = jest.fn()
  .mockImplementationOnce((a,b,c) => a * b * c)
  .mockImplementationOnce((a) => a * 2);
  expect(funcs.randomNumber(2,5,7)).toBe(70);
  expect(funcs.randomNumber).toHaveBeenCalled();
  expect(funcs.randomNumber).toHaveBeenCalledTimes(1);
  expect(funcs.randomNumber).toHaveBeenCalledWith(2,5,7);

  expect(funcs.randomNumber(33)).toBe(66);
  expect(funcs.randomNumber).toHaveBeenCalledTimes(2);
  expect(funcs.randomNumber).toHaveBeenCalledWith(33);
})