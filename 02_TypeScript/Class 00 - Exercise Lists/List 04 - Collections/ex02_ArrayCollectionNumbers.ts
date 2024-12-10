import readlineSync = require("readline-sync");

// const numbers: Array<number> = new Array<number>(10);

// console.log("======== Numeric Data Input ========\n");
// for(let i = 0; i < numbers.length; i++) {
//     numbers[i] = readlineSync.questionInt(`${i+1}) Enter an integer number: `, {limitMessage: "\n-> Invalid data type entered!\n"});
// }

const numbers: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);

let num: number = readlineSync.questionInt("\nEnter the integer you want to find in the array collection: ", {limitMessage: "\n-> Invalid data type entered!"});

let positionFound: number = numbers.indexOf(num);

if (positionFound >= 0)
    console.log(`\n-> The first occurrence of '${num}' in the array collection is in the position ${numbers.indexOf(num)}.`);
else
    console.log(`\n-> The number '${num}' was not found!`);