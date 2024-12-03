const input = require("readline-sync");

let n1, n2, n3, n4, average;

n1 = input.questionFloat("1) Enter the first grade, please: ");
n2 = input.questionFloat("2) Enter the second grade, please: ");
n3 = input.questionFloat("3) Enter the third grade, please: ");
n4 = input.questionFloat("4) Enter the fourth grade, please: ");

average = (n1 + n2 + n3 + n4) / 4;

console.log(`\nThe final average is ${average.toFixed(2)}.`);