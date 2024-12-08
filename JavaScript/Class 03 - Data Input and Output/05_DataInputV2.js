/*

O Pacote Readline-Sync fornece uma maneira fácil de lidar com entradas inválidas nos Métodos questionInt() e questionFloat(). Você pode usar a opção limitMessage para personalizar a mensagem de erro quando o usuário insere um valor inválido.

*/

"use strict"

const input = require("readline-sync");

let quantity;
let height;
let char;
let answer;
let word;

quantity = input.questionInt("\nEnter an integer number: ", {limitMessage: "\n-> Invalid data type entered!"});
console.log("\n-> The integer number typed was: " + quantity);

height = input.questionFloat("\nEnter a float number: ", {limitMessage: "\n-> Invalid data type entered!"});
console.log("\n-> The float number typed was: " + height);

char = input.keyIn("\nEnter a char value type: ");
console.log("\n-> The char value typed was: " + char);

answer = input.keyInYNStrict("\nEnter a boolean value: ");
console.log("\n-> The boolean value typed was: " + answer);

word = input.question("\nEnter a string value: ");
console.log("\n-> The string value typed was: " + word);