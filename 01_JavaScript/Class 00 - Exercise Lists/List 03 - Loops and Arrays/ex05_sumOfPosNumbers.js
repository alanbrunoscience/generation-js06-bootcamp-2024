/* Enunciado do Exercício

Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. Ao final, mostre na tela a soma de todos os números digitados, que sejam positivos.

*/

"use strict"

const input = require("readline-sync");

let num, sumPosNum = 0;

do {

    num = input.questionInt("\nEnter an integer number: ");

    if(num >= 0) {
        sumPosNum += num;
    }

} while(num !== 0);

console.log(`\n-> The sum of positive numbers is ${sumPosNum}.`);