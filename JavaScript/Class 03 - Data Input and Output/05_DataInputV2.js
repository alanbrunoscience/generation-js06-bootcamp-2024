/*

- O Pacote Readline-Sync fornece uma maneira fácil de lidar com entradas inválidas nos Métodos questionInt() e questionFloat(). Você pode usar a opção limitMessage para personalizar a mensagem de erro quando o usuário insere um valor inválido.

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

/*

- Na entrada de dados das variáveis do tipo ponto flutuante (números reais), ao digitar os valores, observe que os números decimais foram separados por ponto e não por vírgula. A explicação é simples: O JavaScript utiliza o padrão Americano, onde o separador de decimais é o ponto. Caso as casas decimais sejam zero, não é necessário digitar .00, basta digitar o número como se fosse um número inteiro. Caso você se esqueça e digite vírgula, ao invés do ponto, Pacote Readline-Sync irá ignorar a parte decimal e receberá apenas a parte inteira.

*/