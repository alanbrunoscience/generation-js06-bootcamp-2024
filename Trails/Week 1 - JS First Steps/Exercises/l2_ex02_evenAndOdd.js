/* Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma mensagem indicando se este número é par ou ímpar e se o número é positivo ou negativo. */

const input = require("readline-sync");

let num;

num = input.questionInt("Enter an integer number, please: ");

if(num % 2 == 0) {
    if(num >= 0) {
        console.log(`\nThe number ${num} is even and positive!`);
    } else {
        console.log(`\nThe number ${num} is even and negative!`);
    }
} else {
    if(num >= 0) {
        console.log(`\nThe number ${num} is odd and positive!`);
    } else {
        console.log(`\nThe number ${num} is odd and negative!`);
    }
}