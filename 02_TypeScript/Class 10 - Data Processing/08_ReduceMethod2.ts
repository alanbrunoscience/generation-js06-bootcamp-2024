// Método reduce() - Remover elementos repetidos do array:

let repStates: Array<string> = [
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Espirito Santo",
    "São Paulo",
    "Rio de Janeiro",
    "São Paulo",
    "Rio de Janeiro",
]

console.log("\nOriginal array:\n");
console.dir(repStates);

let statesWithoutRep = repStates.reduce((accumulator: string[], state) => {
    if(accumulator.indexOf(state) === -1)
        accumulator.push(state);
    return accumulator; // Return the updated accumulator
}, []); // // Initialize accumulator as an empty array

console.log("\nArray without repetitions:\n");
console.dir(statesWithoutRep);

/*

- Neste exemplo passamos apenas os parâmetros acumulador e elemento atual. Note que o parâmetro acumulador será um array, porque no final do processamento o Método reduce() retornará um novo array, sem elementos repetidos. Observe que o elemento inicial foi informado como um array vazio []. A cada iteração, através de um laço condicional e do Método indexOf(), checará se o elemento atual da iteração (variável estado) não existe no array acumulador (indexOf() retornando -1). Caso não exista, o elemento atual será adicionado no array acumulador. Ao final, a variável estadosSemRepeticoes receberá o array acumulador, contendo todos os estados do array original, se repetições.

*/