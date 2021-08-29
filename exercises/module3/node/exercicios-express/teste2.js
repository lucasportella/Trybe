const email = 1
const password = 1
const firstName = 'null'
const phone = 1

const verifyFields = [email,password,firstName, phone].every((field) => field );
console.log(verifyFields);
