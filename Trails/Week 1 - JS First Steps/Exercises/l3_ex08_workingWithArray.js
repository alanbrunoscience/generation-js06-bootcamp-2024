"use strict"

/*

Elabore um algoritmo que leia 10 números inteiros e armazene em um vetor. Em seguida, mostre na tela:

- Todos os elementos dos índices ímpares do vetor;
- Todos os elementos do vetor que são números pares;
- A Soma de todos os elementos do vetor;
- A Média de todos os elementos do vetor, armazenada em uma variável do tipo real.

*/

const input = require("readline-sync");

let numbers = new Array(10),
    sumNum = 0,
    average = 0;

for (let i = 0; i < 10; i++) {
    numbers[i] = input.questionInt(`Enter the ${i + 1}º number: `);
    sumNum += numbers[i];
}

console.log("\n1) Elements in odd indexes:\n")
let oddIndexElements = [];

for(let i = 1; i < numbers.length; i += 2) {
    oddIndexElements.push(numbers[i]);
}

console.log("-> " + oddIndexElements.join(", "));

console.log("\n2) Even Elements:\n");
let evenElements = [];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
        evenElements.push(numbers[i]);
    }  
}

console.log("-> " + evenElements.join(", "));

console.log(`\n3) The sum of all elements:\n\n-> ${sumNum}`);

average = sumNum / numbers.length;

console.log(`\n4) The average of all elements' values:\n\n-> ${average.toFixed(2)}`);