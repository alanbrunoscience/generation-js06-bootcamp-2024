"use strict"

const input = require("readline-sync");

let sumElements = 0;

let arraySum = Array(4);
let array2DInt = new Array(5);

for (let i = 0; i < array2DInt.length; i++) {
    array2DInt[i] = Array(4);
}

for (let i = 0; i < array2DInt.length; i++) {
    for(let j = 0; j < array2DInt[i].length; j++) {
        array2DInt[i][j] = input.questionInt(`Enter the element number[${i}][${j}]: `);
    }
}

console.log();
console.table(array2DInt);

for (let j = 0; j < array2DInt[j].length; j++) {
    for(let i = 0; i < array2DInt.length; i++) {
        
        // Stores the sum of the column elements in the variable
        sumElements += array2DInt[i][j];

    }

    // Store the sum in the auxiliary vector
    arraySum[j] = sumElements;

    // Reset the "sum" variable to receive the sum of the elements in the next column
    sumElements = 0;

}

console.log();
console.table(arraySum);