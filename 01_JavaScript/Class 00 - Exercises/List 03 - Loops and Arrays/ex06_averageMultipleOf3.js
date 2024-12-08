/* Enunciado do Exercício

Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. Ao final, mostre na tela a média de todos os números digitados, que sejam múltiplos de 3.

*/

"use strict"

const input = require("readline-sync");

let num, sumMultiple3 = 0, countMult3 = 0, averageMult3;

do {

    num = input.questionInt("\nEnter an integer number: ");

    if((num != 0) && num % 3 === 0) {
        sumMultiple3 += num;
        countMult3++;
    }

} while(num !== 0);

averageMult3 = sumMultiple3 / countMult3;

console.log(`\n-> The average of all numbers that are multiples of 3 is ${averageMult3.toFixed(2)}.`);