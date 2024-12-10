/* Enunciado do Exercício

Para doar sangue é necessário ter entre 18 e 69 anos. Pessoas com idade entre 60 e 69 anos, só podem doar sangue se não for a sua primeira doação. Escreva um Algoritmo que leia via teclado o nome do doador (string), a idade (número inteiro) do doador e se já fez outras doações de sangue (boolean). Conforme as Regras para a doação de sangue citadas acima, mostre na tela se o doador está Apto ou Não Apto para doar sangue.

*/

"use strict"

const input = require("readline-sync");

let name = input.question("1) Enter you name, please: ");
let age = input.questionInt("2) How old are you? ");
let isDonorInput = input.question("3) Is this your first blood donation (true / false)? ").toLowerCase();

if (isDonorInput !== "true" && isDonorInput !== "false") {
    console.log("\n-> Invalid input! It must be 'true' or 'false'.");
    process.exit(0);
}

let isDonor = isDonorInput === "true";
let isEligible = false;

if(age >= 18 && age <= 69) {
    isEligible = true;
    if(age >= 60 && age <= 69 && isDonor) {
        isEligible = false;
    }
}

if(isEligible) {
    console.log(`\n${toTitleCase(name)} is eligible to donate blood!`);
} else {
    console.log(`\n${toTitleCase(name)} is not eligible to donate blood!`);
}

// Helper function to convert strings to Title Case
function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}