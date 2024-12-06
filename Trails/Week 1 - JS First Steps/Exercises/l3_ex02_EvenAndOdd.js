/*
2) Escreva um algoritmo, que leia 10 números inteiros via teclado e mostre na tela quantos números são pares e quantos número são ímpares. Veja o exemplo abaixo:
*/

const input = require("readline-sync");

let i, countEven = 0, countOdd = 0, num;

for(i = 0; i < 10; i++) {
    num = input.questionInt(`\nEnter the ${i + 1}\u00BA integer number, please: `);

    if(num % 2 == 0) {
        countEven++;
    } else {
        countOdd++;
    }
}

console.log(`\n\n-> Total even numbers: ${countEven};`);
console.log(`-> Total odd numbers: ${countOdd}.`);
