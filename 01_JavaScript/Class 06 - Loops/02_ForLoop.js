const  input = require("readline-sync");

let num, i;

num = input.questionInt("Enter an integer number: ");

for(i = 1; i <= 10; i++) {
    console.log(num + " * " + i + " = " + (num * i));
}