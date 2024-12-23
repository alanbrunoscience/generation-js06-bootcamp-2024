let sortedNumbers1: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
let repeatedNumbers1: Array<number> = [1, 2, 3, 1, 4, 5, 6, 2, 7, 8, 9, 3, 4, 10, 7];
 
let disorderedNumbers1: Array<number> = [6, 7, 8, 1, 4, 5, 9, 10, 2, 3];
 
let states1: Array<string> = [
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Espirito Santo",
    "Rio Grande do Sul",
    "Santa Catarina",
    "Paraná"
];
 
let repeatedStates1: Array<string> = [
    'São Paulo',
    'Rio de Janeiro',
    'Minas Gerais',
    'Espirito Santo',
    'São Paulo',
    'Rio de Janeiro',
    'São Paulo',
    'Rio de Janeiro',
];
 
let midwestStates1: Array<string> = [
    'Goiás',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Brasília'
];

console.log("\n1) List states starting with 'Rio' (filter()):\n");

let statesContainRio1 = states.filter(state => state.includes("Rio"));

console.dir(statesContainRio);

console.log("\n2) List numbers multiplied by 3 (map()):\n");
let numbersMult3 = sortedNumbers.map(n => n * 3);

console.dir(numbersMult3);

console.log("\n3) List states without repetitions (reduce()):\n");
let statesWithoutRep1 = repeatedStates.reduce((acumulator: string[], state) => {
    if(acumulator.indexOf(state) === -1)
        acumulator.push(state);
    return acumulator; // Return the updated accumulator
}, []); // Initialize accumulator as an empty array

console.dir(statesWithoutRep);

console.log("\n4) Array combination (Spread Operator (...)):\n");

const combinedArray: number[] = [...sortedNumbers, ...disorderedNumbers]

console.dir(combinedArray);