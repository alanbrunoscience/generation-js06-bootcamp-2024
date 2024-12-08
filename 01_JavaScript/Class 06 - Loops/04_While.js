"use strict"

const input = require("readline-sync");

let answer = true;
let num1, num2, result;

while (answer) {

    num1 = input.questionInt("Enter the first value: ");

    num2 = input.questionInt("Enter the second value: ");

    result = num1 + num2;

    console.log(`\n-> The sum result is ${result}.`);

    console.log("\n================= MENU =================");
    answer = input.keyInYNStrict("\nDo you want to continue? ");
    console.log("\n========================================\n");

}