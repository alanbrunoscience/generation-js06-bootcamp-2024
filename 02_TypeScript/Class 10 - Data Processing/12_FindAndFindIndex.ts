/* Métodos find e findIndex

- O método find() retorna o valor do primeiro elemento correspondente a quaisquer condições definidas através de uma Arrow Function. O método findIndex() retorna o índice do primeiro elemento correspondente a quaisquer condições definidas através de uma Arrow Function.

Sintaxe:

let variavel = nome_do_array.find(arrow_function);

let variavel = nome_do_array.findIndex(arrow_function);

- Note que no parâmetro dos métodos find() e findIndex() é necessário passar uma Arrow Function, indicando os critérios de busca. A variável que receberá o resultado do processamento do Método find() será do mesmo tipo do array pesquisado. A variável que receberá o resultado do processamento do Método findIndex() será do tipo number.

*/

let repeatedNumbers: Array<number> = [1, 2, 3, 1, 4, 5, 6, 2, 7, 8, 9, 3, 4, 10, 7];

console.log("\nArray 'repeatedNumbers' elements:\n");
console.dir(repeatedNumbers);

console.log("\n*** find() Method ***\n");

console.log("-> Find the first number of the array 'repeatedNumbers' greater than 9:\n");
let numberGreater9 = repeatedNumbers.find(n => n > 9);
console.log(numberGreater9);

console.log("\n*** findIndex() Method ***\n");

console.log("-> Find the index of the first number of the array 'repeatedNumbers' greater than 9:\n");
let posNumberGreater9 = repeatedNumbers.findIndex(n => n > 9);
console.log(posNumberGreater9);