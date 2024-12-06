"use strict"

const input = require("readline-sync");

let arrayNames = ["Samantha", "Amanda", "Vinicius", "Cauê", "Leonardo"];

arrayNames.sort();

console.log("Array in Ascending Order:\n");
for (let i = 0; i < arrayNames.length; i++) {
  console.log(arrayNames[i]);
}

arrayNames.reverse();

console.log("\nArray in Descending Order:\n");
for (let i = 0; i < arrayNames.length; i++) {
  console.log(arrayNames[i]);
}
