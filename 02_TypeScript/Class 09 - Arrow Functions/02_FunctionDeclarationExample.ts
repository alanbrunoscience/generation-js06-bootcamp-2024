import readlineSync = require("readline-sync");

let number1: number = readlineSync.questionFloat("1) Enter the first number: ");
let number2: number = readlineSync.questionFloat("2) Enter the second number: ");

console.log(`\n-> ${number1} + ${number2} = ${add(number1, number2).toFixed(2)}`);

export function add(number1: number, number2: number): number {
    return number1 + number2;
}