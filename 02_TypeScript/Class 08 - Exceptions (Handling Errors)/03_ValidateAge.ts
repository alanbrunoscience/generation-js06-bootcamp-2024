import readline = require("readline-sync");

        let idade: number = readline.questionInt("Digite a idade: ")
        validarIdade(idade)

function validarIdade(idade: number): void {
    if (idade > 18)
        console.log("A pessoa é maior de idade!")
}