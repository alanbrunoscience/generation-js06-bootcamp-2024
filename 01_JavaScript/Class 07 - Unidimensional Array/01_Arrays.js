"use strict"

const input = require("readline-sync");

let arrayStrings = [
    "Boxer",
    "Pastor Alemão",
    "Pinscher",
    "Husky Siberiano",
    "Corgi"
];

for (let i = 0; i < arrayStrings.length; i++) {
    console.log(`${i + 1}º element: ${arrayStrings[i]}`);
}

/* Ou...

console.log("1º elemento da lista: " + vetorstring[0]);
console.log("2º elemento da lista: " + vetorstring[1]);
console.log("3º elemento da lista: " + vetorstring[2]);
console.log("4º elemento da lista: " + vetorstring[3]);
console.log("5º elemento da lista: " + vetorstring[4]);

*/

console.log(`\nThe array's length is: ${arrayStrings.length}`); // O "length" é usado para medir o tamanho do vetor, ou melhor, a quantidade de elementos armazenados.