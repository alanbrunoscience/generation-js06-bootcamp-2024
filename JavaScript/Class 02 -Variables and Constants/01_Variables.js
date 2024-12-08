"use strict"

let nome = "Rafael";
let profissao = "Pessoa Desenvolvedora"
let salarioBruto = 3500.44;
const bonus = 0.05;

console.log("\nNome: ", nome);
console.log("Tipo da variável: ", typeof nome);

// nome = 12.45;
// console.log("\nNome: ", nome);
// console.log("Tipo da variável: ", typeof nome);

console.log("\nNome: ", nome);
console.log("Profissão: ", profissao);
console.log("Salário com bônus: ", new Intl.NumberFormat('pt-br', { // Formatar o valor da moeda, levando em consideração uma determinada região
    style: 'currency',
    currency: 'BRL',
}).format(salarioBruto + (bonus * salarioBruto)));

// Interpolação de Strings
console.log(`\nO salário bruto do colaborador ${nome} é ${new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
}).format(salarioBruto)}`);
