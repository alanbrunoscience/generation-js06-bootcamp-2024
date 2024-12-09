import readlinesync = require("readline-sync");

let quantity: number;
let height: number;
let singChar: string;
let answer: boolean;
let word: string;

quantity = readlinesync.questionInt("\nEnter an integer number: ", {limitMessage: "\n-> Invalid data type entered!"});
console.log("\n-> The integer number typed was: " + quantity);

height = readlinesync.questionFloat("\nEnter a float number: ", {limitMessage: "\n-> Invalid data type entered!"});
console.log("\n-> The float number typed was: " + height);

singChar = readlinesync.keyIn("\nEnter a char value type: ");
console.log("\n-> The char value typed was: " + singChar);

answer = readlinesync.keyInYNStrict("\nEnter a boolean value: ");
console.log("\n-> The boolean value typed was: " + answer);

word = readlinesync.question("\nEnter a string value: ");
console.log("\n-> The string value typed was: " + word);