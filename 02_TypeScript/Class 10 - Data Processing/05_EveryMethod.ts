/* Método every

- O método every() verifica se todos os elementos de um array correspondem a quaisquer condições definidas através de uma Arrow Function. Este Método é muito útil para validar os dados de um array.

Sintaxe:

let variavel = nome_do_array.every(arrow_function);

- A variável que receberá o resultado do processamento do Método every() será do tipo boolean.

*/

let arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("\nCheck if all numbers from the list are less than or equal to ten:\n");
let numbersLessEqual10 = arrayOfNumbers.every(n => n <= 10);
console.dir(numbersLessEqual10);