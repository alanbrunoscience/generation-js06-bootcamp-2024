"use strict"

const input = require("readline-sync");

let i = 1;
let num = input.questionInt("Enter an integer number: ");

console.log(`\n===== Multiplication Table of ${num} =====\n`);
do {
    console.log(num + " * " + i + " = " + (num * i));
    i++;
} while (i <= 10);