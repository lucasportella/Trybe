const math = require("./math");

describe('mock math func', () => {
  test("should mock subtrair func", () => {
    math.subtrair = jest.fn();
    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
  });
  test('mock multiplicar return "10"', () => {
    math.multiplicar = jest.fn().mockReturnValue('10');
    expect(math.multiplicar()).toBe('10');
    expect(math.multiplicar).toHaveBeenCalled();
  })
  test('mock somar and implement sum return sum', () => {
    math.somar = jest.fn().mockImplementation((a,b) => a + b)
    expect(math.somar(10,8)).toBe(18);
    expect(math.somar).toHaveBeenCalledWith(10,8);
    expect(math.somar).toHaveBeenCalled();
  })


})

