const addPerson = (nome) => {
  let protoName = nome.split(' ').join('_');
  const obj = {
  name: nome,
  email: protoName + '@trybe.com'
}
return obj
}


const newEmployees = () => {
  const employees = {
    id1: addPerson('Pedro Guerra'),
    id2: addPerson('Luiza Drumond'),
    id3: addPerson('Carla Paiva'),
  }
  return employees;
};


console.log(newEmployees());