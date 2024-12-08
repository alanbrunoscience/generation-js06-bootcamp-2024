"use strict"

const input = require("readline-sync");

// Creating a bi-dimensional array
let array2DInt = new Array(3);

for(let i = 0; i < array2DInt.length; i++) {
    array2DInt[i] = Array(3)
}

// Filling up the values of the bi-dimensional array
for(let i = 0; i < array2DInt.length; i++) {
    for(let j = 0; j < array2DInt.length; j++) {
        array2DInt[i][j] = input.questionInt("Enter an integer number, please: ");
    }
}

console.log("\n");
console.table(array2DInt);

let mainDiagElem = [],
    sumMainDiagElem = 0,
    secDiagElem = [],
    sumSecDiagElem = 0;

// Getting values from the main diagonal
for(let i = 0; i < array2DInt.length; i++) {
    for(let j = 0; j < array2DInt.length; j++) {
        if(i === j) {
            mainDiagElem.push(array2DInt[i][j]);
            sumMainDiagElem += array2DInt[i][j];
        }
    }
}

// Getting values from the secondary diagonal
let relLength = array2DInt.length;

for(let i = 0; i < array2DInt.length; i++) {
    for(let j = 0; j < relLength; j++) {
        if(array2DInt[i][j] === array2DInt[i][relLength - 1]) {
            secDiagElem.push(array2DInt[i][j]);
            sumSecDiagElem += array2DInt[i][j];
        }
    }
    relLength -= 1;
}

// Printing values
console.log("\n\n=============== RESULTS ===============\n")

console.log("\n1) Elements of the Main Diagonal:\n");
console.log("-> " + mainDiagElem.join(", "));

console.log("\n2) Elements of the Secondary Diagonal:\n");
console.log("-> " + secDiagElem.join(", "));

console.log("\n3) Sum of the elements of the Main Diagonal:\n\n-> " + sumMainDiagElem);

console.log("\n4) Sum of the elements of the Secondary Diagonal:\n\n-> " + sumSecDiagElem);