/* Switch Case como If-Else

- O JavaScript, diferentemente de outras linguagens, consegue implementar um "Switch Case" de forma similar a um "If-Else", mas com algumas diferenças no modo de operação.

*/

"use strict"

const leia = require('readline-sync')

let categoria;

let idade = leia.questionInt("Digite a idade do cliente: ");

switch (true) {
  case idade >= 0 && idade <= 12:
    categoria = "Criança";
    break;
  case idade >= 13 && idade <= 17:
    categoria = "Adolescente";
    break;
  case idade >= 18 && idade <= 59:
    categoria = "Adulto";
    break;
  case idade >= 60:
    categoria = "Idoso";
    break;
  default:
    categoria = "Idade inválida";
}

console.log(`\n-> O Cliente é: ${categoria}`);
