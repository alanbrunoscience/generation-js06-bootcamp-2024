import readlineSync = require("readline-sync");

const numbers: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

let num = readlineSync.questionInt("\nEnter the integer you want to find in the set collection: ", {limitMessage: "\n-> Invalid data type entered!"});

let positionFound = numbers.has(num);

if (positionFound)
    console.log(`\n-> The number '${num}' was found!`);
else
    console.log(`\n-> The number '${num}' was not found!`);
