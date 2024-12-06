/*

Com base na tabela abaixo, escreva um algoritmo que simule uma Calculadora simples. O programa deverá ler dois números reais: numero1 e numero2, e na sequência ler o Código da operação matemática (número inteiro entre 1 e 4). A seguir, mostre na tela o resultado da operação entre os 2 números. Caso o número da operação esteja fora do intervalo entre 1 e 4, mostre a mensagem na tela Operação Inválida!

|   Code    |  Math Operations  |    
|     1     |        Sum        |
|     2     |    Subtraction    |
|     3     |   Multiplication  |
|     4     |      Division     |

*/

const input = require("readline-sync");

let n1 = input.questionFloat("1) Enter the first number: ");
let n2 = input.questionFloat("2) Enter the second number: ");

let code = input.questionInt("3) Enter the desired mathematical operation code:\n\n\t|   Code    |  Math Operations  |" +
    "\n\t|     1     |        Sum        |" +
    "\n\t|     2     |    Subtraction    |" +
    "\n\t|     3     |   Multiplication  |" +
    "\n\t|     4     |      Division     |\n\n-> ");

switch(code) {
    case 1:
        console.log(`\n-> Result: ${n1.toFixed(2)} + ${n2.toFixed(2)} = ${(n1 + n2).toFixed(2)}`);
        break;
    case 2:
        console.log(`\n-> Result: ${n1.toFixed(2)} - ${n2.toFixed(2)} = ${(n1 - n2).toFixed(2)}`);
        break;
    case 3:
        console.log(`\n-> Result: ${n1.toFixed(2)} * ${n2.toFixed(2)} = ${(n1 * n2).toFixed(2)}`);
        break;
    case 4:
        console.log(`\n-> Result: ${n1.toFixed(2)} / ${n2.toFixed(2)} = ${(n1 / n2).toFixed(2)}`);
        break;
    default:
        console.log("\nInvalid mathematical operation code!");
}
