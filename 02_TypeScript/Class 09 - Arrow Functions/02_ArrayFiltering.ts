let sortedNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
let repeatedNumbers: Array<number> = [1, 2, 3, 1, 4, 5, 6, 2, 7, 8, 9, 3, 4, 10, 7];
 
let disorderedNumbers: Array<number> = [6, 7, 8, 1, 4, 5, 9, 10, 2, 3];
 
let states: Array<string> = [
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Espirito Santo",
    "Rio Grande do Sul",
    "Santa Catarina",
    "Paraná"
];
 
let repeatedStates: Array<string> = [
    'São Paulo',
    'Rio de Janeiro',
    'Minas Gerais',
    'Espirito Santo',
    'São Paulo',
    'Rio de Janeiro',
    'São Paulo',
    'Rio de Janeiro',
];
 
let midwestStates: Array<string> = [
    'Goiás',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Brasília'
];

console.log("\nList states starting with 'Rio' (filter()):\n");

let statesContainRio = states.filter(state => state.includes("Rio"));

console.dir(statesContainRio);

console.log("\nList numbers multiplied by 3 (map()):\n");
let numbersMult3 = sortedNumbers.map(n => n * 3);

console.dir(numbersMult3);