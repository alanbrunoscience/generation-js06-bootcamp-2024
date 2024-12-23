/* Método filter

- O método filter() retorna um novo array contendo todos os elementos que correspondem às condições de filtragem, definidas através de uma Arrow Function. O método filter() é muito útil e amplamente utilizado nas Bibliotecas e Frameworks TypeScript/JavaScript para filtrar uma lista de dados recebida de uma API, sem a necessidade de gerar uma nova requisição ao servidor.

Sintaxe:

let variavel = nome_do_array.filter(arrow_function);

- A variável que receberá o resultado do processamento do Método filter() será um array, do mesmo tipo de dados do array que foi aplicado o filtro.

*/

let originalArray: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let states: Array<string> = [
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Espírito Santo",
    "Rio Grande do Sul",
    "Santa Catarina",
    "Paraná"
];

console.log("\nList all even numbers:\n");
let evenNumbers = originalArray.filter(n => n % 2 === 0);
console.dir(evenNumbers);

console.log("\nList all states that contain the word 'Rio' in their name:\n");
let statesContainRio = states.filter(s => s.includes("Rio"));
console.dir(statesContainRio);