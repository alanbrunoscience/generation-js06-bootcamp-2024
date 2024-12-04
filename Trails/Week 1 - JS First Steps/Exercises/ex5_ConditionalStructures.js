/* Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C. */

const input = require("readline-sync");

let a, b, c, sum;

a = input.questionInt("1) Enter the first integer value: ");
b = input.questionInt("2) Enter the second integer value: ");
c = input.questionInt("3) Enter the third integer value: ");

sum = a + b;

if (sum === c) {
    console.log(`\n-> The sum of ${a} and ${b} (${a} + ${b} = ${sum}) equals ${c}.`);
} else if(sum > c) {
    console.log(`\n-> The sum of ${a} and ${b} (${a} + ${b} = ${sum}) is greater than ${c}.`);
} else {
    console.log(`\n-> The sum of ${a} and ${b} (${a} + ${b} = ${sum}) is less than ${c}.`);
}