const Animals = [
  { name: "Dorminhoco", age: 1, type: "Dog" },
  { name: "Soneca", age: 2, type: "Dog" },
  { name: "Preguiça", age: 5, type: "Cat" },
];

const findAnimalByName = async (name) => {
  const searchResult = Animals.find((animal) => animal.name === name);
  try {
    if (searchResult !== undefined)
    return searchResult
  }
  if (searchResult === undefined) {
    throw new Error("Nenhum animal com esse nome!");
  }
  return searchResult;
};
const getAnimal = async (name) => {
  try {
    return await findAnimalByName(name);
  } catch (error) {
    const msg = "Nenhum animal com esse nome!";
    return msg;
  }
};
// ---------------------

describe("Testando promise - findAnimalByName", () => {
  describe("Quando existe o animal com o nome procurado", () => {
    test("Retorne o objeto do animal", () => {
      expect.assertions(1);
      return getAnimal("Dorminhoco").then((animal) => {
        expect(animal).toEqual({ name: "Dorminhoco", age: 1, type: "Dog" });
      });
    });
  });

  describe("Quando não existe o animal com o nome procurado", () => {
    test("Retorna um erro", () => {
      expect.assertions(1);
      return getAnimal("Soneca").catch((error) =>
        expect(error).toEqual("Nenhum animal com esse nome!")
      );
    });
  });
});
