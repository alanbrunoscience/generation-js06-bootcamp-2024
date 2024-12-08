/* Operadores Aritméticos

+: Soma;
-: Subtração;
*: Multiplicação;
/: Divisão;
**: Potenciação;
%: Módulo ou Resto da Divisão.

Os Operadores Aritméticos obedecem às regras matemáticas comuns:

- As expressões de dentro de parênteses são sempre resolvidas antes das expressões fora dos parênteses;

- Quando existe um parêntese dentro de outro, a solução sempre inicia do parêntese mais interno até o mais externo (de dentro para fora);

- Quando duas ou mais expressões tiverem a mesma prioridade, a solução é sempre iniciada da expressão mais à esquerda até a mais à direita.

*/

"use strict"

const input = require('readline-sync');

let n1, n2;

n1 = input.questionInt("Enter the first value: ");
n2 = input.questionInt("Enter the second value: ");

console.log("\nThe 'n1' variable is: ", n1);
console.log("The 'n2' variable is: ", n2);

console.log(`\n${n1} + ${n2} = ${n1 + n2}`);
console.log(`\n${n1} - ${n2} = ${n1 - n2}`);
console.log(`\n${n1} * ${n2} = ${n1 * n2}`);
console.log(`\n${n1} / ${n2} = ${(n1 / n2).toFixed(2)}`);
console.log(`\n${n1} % ${n2} = ${(n1 % n2)}`);
console.log(`\n${n1} ^ ${n2} = ${(Math.pow(n1, n2))}`);
console.log(`\nThe square root of ${n1} = ${(Math.sqrt(n1)).toFixed(2)}`);
console.log(`\nThe square root of ${n2} = ${(Math.sqrt(n2)).toFixed(2)}`);