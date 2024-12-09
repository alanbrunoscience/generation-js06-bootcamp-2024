"use strict"

const input = require("readline-sync");

let arrayNames = ["Samantha", "Amanda", "Vinicius", "Cauê", "Leonardo"];

arrayNames.sort(); // Sorts the elements of an array in ascending lexicographic order.

console.log("Array in Ascending Order:\n");
for (let i = 0; i < arrayNames.length; i++) {
  console.log(arrayNames[i]);
}

arrayNames.reverse(); // Reverses the current ordering of elements in an array.

console.log("\nArray in Descending Order:\n");
for (let i = 0; i < arrayNames.length; i++) {
  console.log(arrayNames[i]);
}
