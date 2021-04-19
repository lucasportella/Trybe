const challenges = require("./challenges");
const challenges2 = require("./challenges2");
const { encode, decode } = challenges;
const { techList, hydrate } = challenges2;

describe("testar funções", () => {
  it("test encode function", () => {
    expect(encode).toBeDefined();
  });

  it("test encode aeiou", () => {
    expect(encode("aeiou")).toBe("12345");
  });

  it("test others characters", () => {
    expect(encode("vwxyz")).toBe("vwxyz");
  });

  it("test length return", () => {
    expect(encode("tribo").length).toBe(5);
  });

  it("test techlist", () => {
    expect(
      techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas")
    ).toEqual([
      {
        tech: "CSS",
        name: "Lucas",
      },
      {
        tech: "HTML",
        name: "Lucas",
      },
      {
        tech: "JavaScript",
        name: "Lucas",
      },
      {
        tech: "Jest",
        name: "Lucas",
      },
      {
        tech: "React",
        name: "Lucas",
      },
    ]);
  });

  it('test hydrate function', () => {
    expect(hydrate).toBeDefined();
  })

  it('test typeof hydrate function', () => {
    expect(typeof hydrate).toBe('function');
  })

});
