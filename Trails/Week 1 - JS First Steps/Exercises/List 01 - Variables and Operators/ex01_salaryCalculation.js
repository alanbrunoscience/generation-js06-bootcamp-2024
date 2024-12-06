const input = require("readline-sync");

let salary = input.questionFloat("Enter your salary: R$ ");
let salaryBonus = input.questionFloat("Enter the salary bonus: R$ ");

let newSalary = salary + salaryBonus;

console.log("\n-> Value of the new salary: ", new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
}).format(newSalary));
