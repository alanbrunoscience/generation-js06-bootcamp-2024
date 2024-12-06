"use strict"

const input = require("readline-sync");

let arrayInt = new Array(5);

for (let i = 0; i < arrayInt.length; i++) {
    arrayInt[i] = input.questionInt("Enter a number: ");
}

console.table(arrayInt);