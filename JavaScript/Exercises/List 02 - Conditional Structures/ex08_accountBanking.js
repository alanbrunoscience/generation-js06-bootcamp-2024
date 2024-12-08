/* Enunciado do Exercício

Desenvolva um algoritmo que simule as operações básicas de uma Conta Bancária. O programa deverá ler o tipo da operação a ser realizada com base na tabela abaixo (número inteiro entre 1 e 3) e o valor a ser depositado ou sacado (somente nas opções 2 e 3). Considere que um saque só pode ser realizado caso haja saldo suficiente. Ao final de cada operação, exiba o novo Saldo na tela. A variável saldo (número real), será inicializada com o valor de R$ 1000.00. Caso o número da operação esteja fora do intervalo entre 1 e 4, mostre a mensagem na tela Operação Inválida!

|  Operation Code  |   Operation   |    
|        1         |    Balance    |
|        2         |   Withdrawal  |
|        3         |    Deposit    |

*/

"use strict"

const input = require("readline-sync");

let balance = 1000.00;

let operationCode = input.questionInt("1) Choose a banking operation code:\n\n\t|  Operation Code  |   Operation   |" +
    "\n\t|        1         |    Balance    |" +
    "\n\t|        2         |   Withdrawal  |" +
    "\n\t|        3         |    Deposit    |\n\n-> ");

switch(operationCode) {
    case 1:
        console.log("\nOperation: Balance");
        console.log(`Balance: R$ ${balance.toFixed(2)}\n`);
        break;
    case 2:
        let valueWithdrawn = input.questionFloat("\nEnter a value to be withdrawn: R$ ");
        if(valueWithdrawn > balance) {
            console.log("\nOperation: Withdrawal");
            console.log("Insufficient Balance!\n");
        } else {
            console.log("\nOperation: Withdrawal");
            console.log(`New Balance: R$ ${(balance - valueWithdrawn).toFixed(2)}\n`);
        }
        break;
    case 3:
        let valueDeposited = input.questionFloat("\nEnter a value to be deposited: R$ ");
        console.log("\nOperation: Deposit");
        console.log(`New Balance: R$ ${(balance + valueDeposited).toFixed(2)}\n`);
        break;
    default:
        console.log("\nInvalid operation code!\n");
        process.exit(0);
}