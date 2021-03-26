// const greetPeople = (people) => {
//   const greeting = 'Hello ';
//   for (let i = 0; i < people.length; i += 1) {
//     people[i] = greeting + people[i];
//   }
//   return people;
// };

const greetPeople = (people) => {
  const greeting = []
  for (let i = 0; i < people.length; i += 1) {
    greeting.push(`Hello ${people[i]}`)
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

const assert = require('assert');
assert.deepStrictEqual(greetPeople(parameter),result);
