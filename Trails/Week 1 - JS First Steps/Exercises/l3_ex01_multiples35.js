/*

1) Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro número deve ser menor do que o segundo número. Caso contrário, deve ser exibida uma mensagem na tela informando que o intervalo é inválido e sair do programa. 
No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5.

*/

const input = require("readline-sync");

let n1, n2, smallestMult, highestMult;

do {
    
    n1 = input.questionInt("1) Enter the first number in the range, please: ");
    n2 = input.questionInt("2) Enter the second number in the range, please: ");

    if(n1 > n2)
        console.log("\n-> Invalid range! The first number must be less than or equal to the second.\n");

} while(n1 > n2);

smallestMult = (Math.ceil(n1 / 15)) * 15;

highestMult = (Math.floor(n2 / 15)) * 15;

console.log(`\nIn the range between ${n1} and ${n2}:\n`);

for(let i = smallestMult; i <= highestMult; i += 15) {
    if(i !== highestMult) {
        console.log(`-> ${i} is a multiple of 3 and 5;`);
    } else {
        console.log(`-> ${i} is a multiple of 3 and 5.`);
    }
    
}
