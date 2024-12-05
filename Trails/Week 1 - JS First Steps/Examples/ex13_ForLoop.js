// The “for” loop is used when the stopping condition is known.

const input = require("readline-sync");

let name;
let i;

for (i = 0; i < 3; i++) {
    name = input.question("Enter a name: ");
    console.log("\n-> The " + (i+1) + "º name typed was '" + name + "'.\n");
}