import readlinesync = require('readline-sync');

let number1: number;
let number2: number;

number1 = readlinesync.questionInt("Enter the first value: ");
number2 = readlinesync.questionInt("Enter the second value: ");

console.log("\nThe 'number1' variable is: ", number1);
console.log("The 'number2' variable is: ", number2);

console.log(`\n${number1} + ${number2} = ${number1 + number2}`);
console.log(`\n${number1} - ${number2} = ${number1 - number2}`);
console.log(`\n${number1} * ${number2} = ${number1 * number2}`);
console.log(`\n${number1} / ${number2} = ${(number1 / number2).toFixed(2)}`);
console.log(`\n${number1} ^ ${number2} = ${(Math.pow(number1, number2))}`);
console.log(`\nThe square root of ${number1} = ${(Math.sqrt(number1)).toFixed(2)}`);
console.log(`\nThe square root of ${number2} = ${(Math.sqrt(number2)).toFixed(2)}`);