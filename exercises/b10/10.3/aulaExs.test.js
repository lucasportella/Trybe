const math = require("./math");

describe("mock math func", () => {
  test("should mock subtrair func", () => {
    math.subtrair = jest.fn();
    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
  });
  test('mock multiplicar return "10"', () => {
    math.multiplicar = jest.fn().mockReturnValue("10");
    expect(math.multiplicar()).toBe("10");
    expect(math.multiplicar).toHaveBeenCalled();
  });
  test("mock somar and implement sum return sum", () => {
    math.somar = jest.fn().mockImplementation((a, b) => a + b);
    expect(math.somar(10, 8)).toBe(18);
    expect(math.somar).toHaveBeenCalledWith(10, 8);
    expect(math.somar).toHaveBeenCalled();
  });
  test("mock dividir return default 15, first 2, second 5", () => {
    math.dividir = jest
      .fn()
      .mockReturnValue(15)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(5);
    expect(math.dividir()).toBe(2);
    expect(math.dividir()).toBe(5);
    expect(math.dividir()).toBe(15);
    expect(math.dividir).toHaveBeenCalledTimes(3);
    expect(math.dividir()).toBe(15);
    expect(math.dividir()).toBe(15);
    expect(math.dividir).toHaveBeenCalled();
    expect(math.dividir).toHaveBeenCalledTimes(5);
    expect(math.dividir).toHaveBeenCalledWith();
  });
  test('mock subtrair restaure original, return default 20', () => {
    math.subtrair = jest.fn()
    math.subtrair.mockImplementation((a,b) => a -b)
    math.subtrair.mockImplementationOnce((a,b) => 20)
    expect(math.subtrair(5,3)).toBe(20);
    expect(math.subtrair).toHaveBeenCalled()
    expect(math.subtrair).toHaveBeenCalledWith(5,3);
    expect(math.subtrair(5,3)).toBe(2);
    expect(math.subtrair(5,3)).toBe(2);
  })
});
