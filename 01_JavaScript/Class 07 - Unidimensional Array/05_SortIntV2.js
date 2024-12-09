/*

The "sort()" method uses the Bubble Sort algorithm to sort lexicographically the values;

*/

"use strict"

let arrayNumbers = [10, 1, 4, 2, 5, 7, 9, 6, 3, 8];

console.table(arrayNumbers);

console.table(arrayNumbers.sort());

// So, I need to pass a comparator function to sort the values for integer numbers.

console.log("\nSorting in ascending order:\n");
console.table(arrayNumbers.sort((a,b) => a - b)); // This is an Arrow Function, that is, a function without a body.

console.log("\nSorting in descending order:\n");
console.table(arrayNumbers.sort((a,b) =>b - a));