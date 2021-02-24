let salary = 3000;
let INSS;
let IR;
let liquidSalary;


if (salary <= 1556.94) {
    INSS = salary * 0.08;
} else if (salary > 1556.94 && salary <= 2594.92) {
    INSS = salary * 0.09;
} else if (salary > 2594.93 && salary <= 5189.82) {
    INSS = salary * 0.11;
} else if (salary > 5189.82) {
    INSS = 570.88;
}

if (salary <= 1903.98) {
    IR = 0;
} else if (salary > 1903.98 && salary <= 2826.65) {
    IR = ((salary * 0.075) - 142.80);
} else if (salary > 2826.65 && salary <= 3751.05) {
    IR = ((salary * 0.15) - 354.80);
} else if (salary > 3751.06 && salary <= 4664.68) {
    IR = ((salary * 0.225) - 636.13)
} else {
    IR = ((salary * 0.275) - 869.36)
}

liquidSalary = sala ry - (INSS + IR);
console.log(`INSS ${INSS}`);
console.log(`IR ${IR}`)
console.log(`Seu salário líquido é de R$${liquidSalary}.`)