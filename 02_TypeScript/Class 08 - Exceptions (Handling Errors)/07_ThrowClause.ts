/* Throw

- A Cláusula throw lança uma exceção definida pelo usuário em qualquer ponto do código. A execução da função atual vai parar (as instruções após o throw não serão executadas), e o controle será passado para o primeiro bloco catch na pilha de chamadas. Se nenhum bloco catch existe entre as funções "chamadoras", o programa será finalizado.

Sintaxe:

throw new Tipo_Erro("Mensagem");

*/

import readlineSync = require("readline-sync");

try {

    let age: number = readlineSync.questionFloat("Enter the person's age: ");

    validateAge(age);

} catch(error: any) {

    console.error("Error: " + error.message);

}

export function validateAge(age: number): void {

    if(age < 18) {
        throw new Error("The person is not fit to drive.");
    } else {
        console.log("The person is fit to drive.");
    }

}

/*

- Observe que a exceção: Error foi disparada dentro do Método validarIdade(), exibindo a mensagem do erro, que foi definida pela pessoa desenvolvedora e o programa foi finalizado na sequência.

- Ao executar a instrução throw, o programa tenta encontrar algum bloco try, que possua instrução catch correspondente ao tipo de exceção que foi lançada. Se encontrar uma correspondência, o controle será transferido para essa instrução, caso contrário o programa será finalizado.

*/