// The “while” loop is used when the stopping condition is not known.

const input = require("readline-sync");

let i = 1, number;

num = input.questionInt("Enter an integer number, please: ");

while(i <= 10) {
    console.log(num + " * " + i + " = " + (num * i));
    i++;
}