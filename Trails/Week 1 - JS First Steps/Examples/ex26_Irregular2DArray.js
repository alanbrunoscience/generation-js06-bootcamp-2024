"use strict"

const input = require("readline-sync");

// Creating a bi-dimensional array
let array2DInt = new Array(2); // Creating Rows

for (let i = 0; i < array2DInt.length; i++){
    array2DInt[i] = Array(3); // Creating Columns
}

// Filling up the bi-dimensional array
for (let i = 0; i < array2DInt.length; i++) {
    for (let j = 0; j < array2DInt[i].length; j++) {
        array2DInt[i][j] = input.questionInt("Enter an integer number, please: ");
    }
}

console.log();
console.table(array2DInt);