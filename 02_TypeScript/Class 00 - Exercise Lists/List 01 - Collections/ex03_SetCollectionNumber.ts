import readlineSync = require("readline-sync");

const numbers: Set<number> = new Set<number>();

console.log("======== Numeric Data Input ========\n");
for(let i = 0; i < 10; i++) {
    numbers.add(readlineSync.questionInt(`${i+1}) Enter an integer number: `, {limitMessage: "\n-> Invalid data type entered!\n"}));
}

console.log("\n======== List Data From Set Collection ========\n");

// Convert the Set to an array, sort and print
[...numbers].sort((a, b) => a - b).forEach(num => console.log(num));

// Convert the Set to an array, sort and print on the same line
// console.log([...numbers].sort((a, b) => a - b).join(" "));