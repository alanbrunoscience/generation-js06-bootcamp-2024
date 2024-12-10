import readlineSync = require("readline-sync");

const numbers: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

// numbers.add(2);
// numbers.add(5);
// numbers.add(1);
// numbers.add(3);
// numbers.add(4);
// numbers.add(9);
// numbers.add(7);
// numbers.add(8);
// numbers.add(10);
// numbers.add(6);

let num: number = readlineSync.questionInt("\nEnter the integer you want to find in the set collection: ", {limitMessage: "\n-> Invalid data type entered!"});

let positionFound: boolean = numbers.has(num);

if (positionFound)
    console.log(`\n-> The number '${num}' was found!`);
else
    console.log(`\n-> The number '${num}' was not found!`);
