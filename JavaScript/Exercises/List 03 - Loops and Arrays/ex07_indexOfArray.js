"use strict"

/*

Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, construa um algoritmo que consiga pesquisar dados no vetor, onde o usuário irá digitar um número e o programa deve exibir na tela a posição deste número no vetor. Caso o número não seja encontrado, a mensagem: “Não foi encontrado!” deve ser exibida na tela.

*/

const input = require("readline-sync");

let numbers = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let num = input.questionInt("Enter the number you want to find: ");

let position = numbers.indexOf(num);

if(position !== -1) {
    console.log(`\n-> The number ${num} is located at the position: ${position}.`);
} else {
    console.log(`\n-> Number ${num} was not found!`);
}