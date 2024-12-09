"use strict"

let groupA = ["Amanda", "Elen", "Vinicius"];
let groupB = ["Samantha", "Letícia", "Alan"];

console.log("Are the arrays the same? ");

if (groupA.toString() === groupB.toString()) { // Convert arrays to strings using the "toString()" method 
  console.log("\n-> Yes! They are.");
} else {
  console.log("\n-> No! They're different.");
}
