const lottery = (number) => {
  const generator = Math.ceil((Math.random() * 5));
  const result = checker(number, generator);
  return result === true ? 'Parabéns voce ganhou!' : 'Tente novamente';
}

const checker = (number, generator) => number === generator ? true : false;

console.log(lottery(2));