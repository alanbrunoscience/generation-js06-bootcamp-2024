// Function Expression

let addNums = function(number1: number, number2: number): number {
    return number1 + number2;
}

/*

- No exemplo acima, utilizamos a sintaxe Expressão de Funções para criar uma variável, que receberá como valor (atribuição) uma função. Note que não há um identificador (nome) após o palavra reservada function. Neste caso, é permitido omitir o identificador, por se tratar de uma Expressão de função, onde a variável fará este papel.

- Um ponto importante, que merece ser destacado e reforçado em relação as funções no TypeScript, é que não importa como a função é criada, uma função é um valor e este valor será armazenado em uma variável chamada 'addNums'. Neste exemplo, 'addNums' é o identificador (nome) de uma variável, que recebe a função como valor, via atribuição.

*/