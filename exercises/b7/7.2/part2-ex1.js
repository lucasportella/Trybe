const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};


const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurn = (obj, key, value) => obj[key] = value;
addTurn(lesson2,'turno','manhã');
// console.log(lesson2);

const listKeys = obj => Object.keys(obj);
// console.log(listKeys(lesson1));

const objSize = obj => Object.keys(obj).length;
// console.log(objSize(lesson3));

const listValues = obj => Object.values(obj);
// console.log(lesson1);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons);

const getTotalStudents = (obj) => {
  const objIn = obj;
  let allStudents = 0;
  for (let values in objIn) {
   allStudents += objIn[values].numeroEstudantes;
  }
  return allStudents
}
// console.log(getTotalStudents(allLessons));

