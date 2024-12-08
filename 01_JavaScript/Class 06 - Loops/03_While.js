// The “while” loop is used when the stopping condition is not known.

"use strict"

const input = require("readline-sync");

let i = 1, number;

num = input.questionInt("Enter an integer number, please: ");

console.log(`\n===== Multiplication Table of ${num} =====\n`);
while(i <= 10) {
    console.log(num + " * " + i + " = " + (num * i));
    i++;
}

/* Attention

- The examples presented with the "For" Loop can also be solved with the "While" Loop. The reverse is not true, because most cases solved with the "While" Loop cannot be solved with the "For" Loop.

*/