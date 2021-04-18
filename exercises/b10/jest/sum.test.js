const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("parameters must be numbers");
  }
  return a + b;
};

describe("sum", () => {
  test("4+5=9", () => {
    expect(sum(4, 5)).toBe(9);
  });

  it("0+0=0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  test("test string", () => {
    expect(() => {
      sum(4, "5").toThrow();
    });
  });

  it('test error msg', () => {
    expect(() => {
      sum(4,'5').toThrow(/parameters must be numbers/)
  })})

});
