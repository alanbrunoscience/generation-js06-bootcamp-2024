import readlineSync = require("readline-sync");

const numbers: Array<number> = new Array<number>(10);

console.log("======== Numeric Data Input ========");
for(let i = 0; i < numbers.length; i++) {
    numbers[i] = readlineSync.questionInt(`\n-> Enter the ${i+1}º integer number: `, {limitMessage: "\n-> Invalid data type entered!"});
}