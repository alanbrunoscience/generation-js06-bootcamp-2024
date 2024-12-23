/* Parâmetros Rest

- Os Parâmetros Rest tem como principal objetivo permitir a criação de funções que aceitam múltiplos parâmetros. Esses parâmetros são armazenados em um array, que pode ser acessado posteriormente pela função. A sintaxe do Parâmetro Rest é composta por 3 pontos (...) antes do nome do Array, igual ao Operador Spread.

Sintaxe:

function funcao(...parametroRest: tipo[]): tipo_de_retorno {
    ...
}

*/

export function addNumbers(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

console.log(addNumbers());
console.log(addNumbers(10, 20));
console.log(addNumbers(10, 20, 30));