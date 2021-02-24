let brute_salary = 5700.98;
let INSS;
let IR;
let salary_minus_INSS;
let liquidSalary;


if (brute_salary <= 1556.94) {
    INSS = brute_salary * 0.08;
} else if (brute_salary > 1556.94 && brute_salary <= 2594.92) {
    INSS = brute_salary * 0.09;
} else if (brute_salary > 2594.93 && brute_salary <= 5189.82) {
    INSS = brute_salary * 0.11;
} else if (brute_salary > 5189.82) {
    INSS = 570.88;
}

salary_minus_INSS = brute_salary - INSS;

if (brute_salary <= 1903.98) {
    IR = 0;
} else if (salary_minus_INSS > 1903.98 && salary_minus_INSS <= 2826.65) {
    IR = ((salary_minus_INSS * 0.075) - 142.80);
} else if (salary_minus_INSS > 2826.65 && salary_minus_INSS <= 3751.05) {
    IR = ((salary_minus_INSS * 0.15) - 354.80);
} else if (salary_minus_INSS > 3751.06 && salary_minus_INSS <= 4664.68) {
    IR = ((salary_minus_INSS * 0.225) - 636.13);
} else {
    IR = ((salary_minus_INSS * 0.275) - 869.36);
}

liquidSalary = salary_minus_INSS - IR;
console.log(`INSS ${INSS}`);
console.log(`IR ${IR}`);
console.log(`Seu salário líquido é de R$${liquidSalary}.`);