"use strict"

const input = require("readline-sync");

let arrayInt = new Array(5);

for (let i = 0; i < arrayInt.length; i++) {
    arrayInt[i] = input.questionInt("Enter a number: ");
}

console.table(arrayInt);

// console.log();
// for (let i = 0; i < arrayInt.length; i++) {
//     console.log(`${i + 1}º number: ${arrayInt[i]}`);
// }