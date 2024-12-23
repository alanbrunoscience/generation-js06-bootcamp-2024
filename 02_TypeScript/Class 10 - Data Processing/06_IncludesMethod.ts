/* Método includes

- O método includes() retorna true se o array contiver um elemento correspondente ao elemento procurado ou false se não contiver.

Sintaxe:

let variavel = nome_do_array.includes("elemento");

- Note que no parâmetro do método includes() não passamos uma Arrow Function, e sim o elemento que estamos procurando, limitado a um único elemento. A variável que receberá o resultado do processamento do Método includes() será do tipo boolean.

*/

let statesBra: Array<string> = [
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Espírito Santo",
    "Rio Grande do Sul",
    "Santa Catarina",
    "Paraná"
];

console.log("\nCheck if the state of 'Minas Gerais' exists on the list:\n");
let stateMinasGerais = statesBra.includes("Minas Gerais");
console.log(stateMinasGerais);