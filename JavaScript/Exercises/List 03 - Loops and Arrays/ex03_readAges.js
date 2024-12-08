/* Enunciado do Exercício

Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), via teclado e mostre na tela o total de pessoas cuja idade seja menor que 21 anos e o total de pessoas cuja idade, seja maior que 50 anos. A leitura dos dados deve ser finalizada ao digitar uma idade negativa. Veja o exemplo abaixo:

*/

"use strict"

const input = require("readline-sync");

let age = 0, under21 = 0, over50 = 0;

while(age >= 0) {
    age = input.questionInt("\nEnter an age: ");

    if(age >= 0 && age < 21) {
        under21++;
    }

    if(age > 50) {
        over50++;
    }
}

console.log(`\n\n-> Total number of people who are under 21: ${under21};`);
console.log(`-> Total number of people who are over 50: ${over50}.`);