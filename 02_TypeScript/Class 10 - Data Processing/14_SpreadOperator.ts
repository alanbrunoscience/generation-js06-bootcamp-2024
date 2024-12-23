/* Operador Spread

- O Operador Spread (propagação) permite expandir arrays e outras expressões em vários parâmetros onde multiplos elementos são esperados. A sintaxe do Operador Spread é semelhante a sintaxe dos Parâmetros Rest, composta por 3 pontos (...) antes do nome do Array ou Expressão. Eles podem ser utilizados tanto em funções, quanto na construção de novos arrays.

Sintaxe - Função:

const constante = funcao(...arr);

Sintaxe - Arrays:

let array: tipo = [...array01, ...array02, ..., ...arrayN];

*/

console.log("\n*** Spread Operator - Functions ***\n");
export function listPerson(name: string, age: number) {
    return {
        name,
        age,
    };
}

const person: [string, number] = ["Alan Bruno", 30];

const result = listPerson(...person);

console.log(result);

console.log("\n\n*** Spread Operator - Arrays ***\n");
const array01: number[] = [1, 2, 3];
const array02: number[] = [4, 5, 6];
const combinedArray: number[] = [...array01, ...array02];

console.log(combinedArray);