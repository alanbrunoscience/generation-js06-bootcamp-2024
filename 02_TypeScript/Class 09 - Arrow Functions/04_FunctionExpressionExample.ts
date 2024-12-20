import readlineSync = require("readline-sync");

let number1: number = readlineSync.questionFloat("1) Enter the first number: ");
let number2: number = readlineSync.questionFloat("2) Enter the second number: ");

let add = function(number1: number, number2: number): number {
    return number1 + number2;
};

console.log(`\n-> ${number1} + ${number2} = ${add(number1, number2).toFixed(2)}`);

/* Observations

- Note que na Declaração de Função, a função foi chamada antes mesmo dela ser declarada, enquanto na Expressão de Função, a função só foi chamada depois de ser criada a variável somar, que recebeu a função. Isso acontece porque diferente da Declaração de Função, onde a função é criada quando o TypeScript está se preparando para iniciar o script, ou seja, elas são visíveis em todos os lugares do código, as Expressões de Função são criadas apenas quando a execução chegar no ponto exato onde ela é criada, por isso que você não consegue utilizar a função antes dela ser criada.

*/