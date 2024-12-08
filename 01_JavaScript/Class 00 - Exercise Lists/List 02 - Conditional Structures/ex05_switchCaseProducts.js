/* Enunciado do Exercício

Com base na tabela abaixo, escreva um algoritmo que leia o código de um item (número inteiro entre 1 e 6) e a quantidade comprada deste item (número inteiro). A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.

|   Product Code   |    Products     |     Unit price     |        
|        1         | Cachorro Quente |      R$ 10.00      |
|        2         |     X-Salada    |      R$ 15.00      |
|        3         |     X-Bacon     |      R$ 18.00      |
|        4         |      Bauru      |      R$ 12.00      |
|        5         |   Refrigerante  |      R$  8.00      |
|        6         | Suco de Laranja |      R$ 13.00      |

*/

"use strict"

const input = require("readline-sync");

let code = input.questionInt("1) Enter the desired product code:\n\n\t|   Product Code   |    Products     |     Unit price     |" +
    "\n\t|        1         | Cachorro Quente |      R$ 10.00      |" +
    "\n\t|        2         |     X-Salada    |      R$ 15.00      |" +
    "\n\t|        3         |     X-Bacon     |      R$ 18.00      |" +
    "\n\t|        4         |      Bauru      |      R$ 12.00      |" +
    "\n\t|        5         |   Refrigerante  |      R$  8.00      |" +
    "\n\t|        6         | Suco de Laranja |      R$ 13.00      |\n\n-> ");

let quantity = input.questionInt("\n2) Enter the desired quantity: ");

let product, totalPrice;

switch(code) {
    case 1:
        totalPrice = quantity * 10.00;
        product = "Cachorro Quente";
        break;
    case 2:
        totalPrice = quantity * 15.00;
        product = "X-Salada";
        break;
    case 3:
        totalPrice = quantity * 18.00;
        product = "X-Bacon";
        break;
    case 4:
        totalPrice = quantity * 12.00;
        product = "Bauru";
        break;
    case 5:
        totalPrice = quantity * 8.00;
        product = "Refrigerante";
        break;
    case 6:
        totalPrice = quantity * 13.00;
        product = "Suco de Laranja";
        break;
    default:
        console.log("\nInvalid product code!");
        process.exit(0);
}

console.log("\n\n========== ORDER INFO ==========\n")
console.log(`-> Order: ${quantity} * ${product};\n-> Total Amount: ${new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
}).format(totalPrice)}.\n`);
console.log("================================\n");