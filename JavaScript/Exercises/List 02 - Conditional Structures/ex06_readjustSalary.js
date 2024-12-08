/* Enunciado do Exercício

Com base na tabela abaixo, escreva um algoritmo que leia o Nome do Colaborador (string), o Código do Cargo do Colaborador (número inteiro entre 1 e 6) e o Salário (número real). A seguir, mostre na tela o Nome do Colaborador, o Cargo e o novo Salário reajustado.

|   Job Code   |    Position    |  Adjustment Percentage  |     
|      1       |    Gerente     |           10%           |
|      2       |    Vendedor    |            7%           |
|      3       |   Supervisor   |            9%           |
|      4       |    Motorista   |            6%           |
|      5       |   Estoquista   |            5%           |
|      6       | Analista de TI |            8%           |

*/

"use strict"

const input = require("readline-sync");

// Helper function to convert strings to Title Case
function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

let adjustedSalary, position;

let employeeName = input.question("1) Enter the employee name: ");
let salary = input.questionFloat("2) Enter the salary: R$ ");
let jobCode = input.questionInt("3) Enter the job code:\n\n\t|   Job Code   |    Position    |  Adjustment Percentage  |" +
    "\n\t|      1       |    Gerente     |           10%           |" +
    "\n\t|      2       |    Vendedor    |            7%           |" +
    "\n\t|      3       |   Supervisor   |            9%           |" +
    "\n\t|      4       |    Motorista   |            6%           |" +
    "\n\t|      5       |   Estoquista   |            5%           |" +
    "\n\t|      6       | Analista de TI |            8%           |\n\n-> ");


switch(jobCode) {
    case 1:
        adjustedSalary = salary + (0.10 * salary);
        position = "Gerente";
        break;
    case 2:
        adjustedSalary = salary + (0.07 * salary);
        position = "Vendedor";
        break;
    case 3:
        adjustedSalary = salary + (0.09 * salary);
        position = "Supervisor";
        break;
    case 4:
        adjustedSalary = salary + (0.06 * salary);
        position = "Motorista";
        break;
    case 5:
        adjustedSalary = salary + (0.05 * salary);
        position = "Estoquista";
        break;
    case 6:
        adjustedSalary = salary + (0.08 * salary);
        position = "Analista de TI";
        break;
    default:
        console.log("\nInvalid job code!");
        process.exit(0);
}

console.log("\n\n========== EMPLOYEE DATA UPDATE ==========\n")
console.log(`-> Name: ${toTitleCase(employeeName)};\n-> Position: ${position};\n-> Adjusted Salary: ${new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
}).format(adjustedSalary)}.\n`);
console.log("===========================================\n");