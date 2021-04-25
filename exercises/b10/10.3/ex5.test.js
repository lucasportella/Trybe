const funcs = require("./funcs");
it("should create new implementation for first func", () => {
  const strUpper = jest.spyOn(funcs, 'strUpper');
  expect(strUpper("lUcas")).toBe("LUCAS");
  expect(strUpper).toHaveBeenCalled();
  expect(strUpper).toHaveBeenCalledTimes(1);
  expect(strUpper).toHaveBeenCalledWith("lUcas");

  strUpper.mockImplementation((str) => str.toLowerCase());
  expect(strUpper("lUCAS")).toBe("lucas");
  expect(strUpper).toHaveBeenCalled();
  expect(strUpper).toHaveBeenCalledTimes(2);
  expect(strUpper).toHaveBeenCalledWith("lUCAS");

  funcs.strUpper.mockRestore();
  expect(funcs.strUpper("lUcas")).toBe("LUCAS");
  expect(funcs.strUpper("abc")).toBe("ABC");
  // expect(funcs.strUpper).toHaveBeenCalledTimes(1);
  // expect(funcs.strUpper).toHaveBeenCalled();
  // expect(funcs.strUpper).toHaveBeenCalledWith("LUCAS");
});
