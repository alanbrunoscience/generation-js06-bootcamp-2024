/* Sums of the columns of the Regular Matrix

Let's create a program to sum all the integer elements of each column of the Matrix. We will use an auxiliary vector of the integer type to store the results of the column sums.

*/

"use strict"

const input = require("readline-sync");

let sumElements = 0;

let arraySum = Array(4);
let array2DInt = new Array(4);

for (let i = 0; i < array2DInt.length; i++) {
    array2DInt[i] = Array(4);
}

for (let i = 0; i < array2DInt.length; i++) {
    for(let j = 0; j < array2DInt.length; j++) {
        array2DInt[i][j] = input.questionInt(`Enter the element number[${i}][${j}]: `);
    }
}

console.log();
console.table(array2DInt);

for (let i = 0; i < array2DInt.length; i++) {
    for(let j = 0; j < array2DInt.length; j++) {
        
        // Stores the sum of the column elements in the variable
        sumElements += array2DInt[j][i];

    }

    // Store the sum in the auxiliary vector
    arraySum[i] = sumElements;

    // Reset the "sum" variable to receive the sum of the elements in the next column
    sumElements = 0;

}

console.log();
console.table(arraySum);