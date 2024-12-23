/* Método some

- O método some() verifica se um array possui pelo menos um elemento, que corresponde a quaisquer condições definidas através de uma Arrow Function. Este Método é muito útil para validar os dados de um array.

Sintaxe:

let variavel = nome_do_array.some(arrow_function);

- A variável que receberá o resultado do processamento do Método some() será do tipo boolean.

*/

let brazilianStates: Array<string> = [
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Espírito Santo",
    "Rio Grande do Sul",
    "Santa Catarina",
    "Paraná"
];

console.log("\nCheck if the state of 'Paraná' exists:\n");
let stateParana = brazilianStates.some(state => state === "Paraná");
console.log(stateParana);

console.log("\nCheck if the states of 'São Paulo' and 'Rio de Janeiro' exist:\n");
let stateSPRJ = brazilianStates.some(state => {return state === "São Paulo" || state === "Rio de Janeiro"});
console.log(stateSPRJ);