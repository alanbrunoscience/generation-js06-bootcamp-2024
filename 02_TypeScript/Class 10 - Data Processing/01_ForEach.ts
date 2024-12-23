/* Método forEach

- O método forEach() permite iterar (percorrer) item a item de um array. É um Método de iteração de um array, sem a necessidade de se criar um Laço de Repetição e declarar todas as variáveis inerentes ao Laço.

Sintaxe:

nome_do_array.forEach(arrow_function);

- Se você quiser percorrer todos os elementos de um array e não necessita que seja de retornado um novo array, use o método forEach().

*/

let sortedNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("List all numbers from the array 'sortedNumbers':\n");
sortedNumbers.forEach(number => console.log(number));

console.log("List all squared numbers from the array 'sortedNumbers':\n");
sortedNumbers.forEach(number => console.log(number ** 2));

console.dir(sortedNumbers); // The original array is not changed.