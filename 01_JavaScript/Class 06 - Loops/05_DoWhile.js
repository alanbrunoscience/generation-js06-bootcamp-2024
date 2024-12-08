const input = require("readline-sync");

let i = 1;
let num = input.questionInt("Enter an integer number: ");

do {
    console.log(num + " * " + i + " = " + (num * i));
    i++;
} while (i <= 10);