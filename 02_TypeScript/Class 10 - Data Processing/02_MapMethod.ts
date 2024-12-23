/* Método Map

- O método do map() cria um novo array, que é o resultado de todos os elementos do array original, depois de serem processados pela Arrow Function, passada no argumento do método map(). O método map() é muito útil e amplamente utilizado nas Bibliotecas e Frameworks TypeScript/JavaScript para obter uma lista de dados de uma API e efetuar filtragens e validações. Este método não altera o array original.

Sintaxe:

let variavel = nome_do_array.map(arrow_function);

- A variável que receberá o resultado do processamento do Método map() será um array, do mesmo tipo de dado do array que foi processado pela Arrow Function.

*/

let numbersArray: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("\nMultiply all numbers by 3 and return a new array:\n");

let numbersMultBy3 = numbersArray.map(n => n * 3);

console.dir(numbersMultBy3);

/* console.dir()

- O console.dir() é uma função utilizada no JavaScript para exibir uma representação interativa de um objeto no console. Sua principal finalidade é oferecer uma forma mais detalhada de visualizar objetos complexos (como arrays ou objetos literais) do que o console.log().

*/