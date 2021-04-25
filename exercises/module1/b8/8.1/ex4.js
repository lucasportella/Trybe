const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'N.A', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const hof = answerKey => classAnswer => {
  let grade = 0;
  for (let index = 0; index < answerKey.length; index += 1){
    if (classAnswer[index] === answerKey[index]) {
      grade += 1;
    } else if (classAnswer[index] === 'N.A') {
    } else {
      grade -= 0.5;
    }
  }
  return grade;
}

console.log(hof(rightAnswers)(studentAnswers));