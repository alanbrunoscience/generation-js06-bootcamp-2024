/* Operadores de Atribuição

- Os Operadores de Atribuição têm como função retornar um valor atribuído de acordo com a operação indicada. A operação é feita entre os dois operandos, sendo atribuído o resultado ao primeiro (=, +=, -=, entre outros).

*/

"use strict"

let x = 4;
let y = 2;
let z = 1;

z = y;
console.log("Atribuição simples (z = y): " + z);

x += y;
console.log("\nAtribuição com soma (x = x + y): " + x);

x -= z;
console.log("\nAtribuição com subtração (x = x - z): " + x);

x *= y;
console.log("\nAtribuição com multiplicação (x = x * y): " + x);

x /= y;
console.log("\nAtribuição com divisão (x = x / y): " + x);

x **= y;
console.log("\nAtribuição com potenciação (x = x ** y): " + x);

x %= y;
console.log("\nAtribuição com o Módulo (x = x % y): " + x);