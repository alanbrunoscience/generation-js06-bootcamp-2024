"use strict"

const input = require('readline-sync'); // Importando a biblioteca readline-sync para ler valores

// var n1;
let n1, n2;

n1 = input.questionInt("Enter the first value: ");
n2 = input.questionInt("Enter the second value: ");

console.log("\nThe 'n1' variable is: ", n1);
console.log("The 'n2' variable is: ", n2);

console.log(`\n${n1} + ${n2} = ${n1 + n2}`);
console.log(`\n${n1} - ${n2} = ${n1 - n2}`);
console.log(`\n${n1} * ${n2} = ${n1 * n2}`);
console.log(`\n${n1} / ${n2} = ${(n1 / n2).toFixed(2)}`);
console.log(`\n${n1} ^ ${n2} = ${(Math.pow(n1, n2))}`);
console.log(`\nThe square root of ${n1} = ${(Math.sqrt(n1)).toFixed(2)}`);
console.log(`\nThe square root of ${n2} = ${(Math.sqrt(n2)).toFixed(2)}`);