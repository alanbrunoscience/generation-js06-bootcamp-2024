/* O comando de Saída console.error()

- O comando de Saída console.error() funciona da mesma forma que o comando de Saída console.log(). A principal diferença é que este comando é usado principalmente para exibir as mensagens relacionadas aos erros de exceção capturadas pela instrução catch no console. Dependendo das configurações do seu console, a mensagem poderá ser exibida na cor vermelha, para tornar mais óbvio que é uma mensagem de erro.

*/

try {
    
    const result = convert(123);
    console.log(result);

} catch(error) {

    console.error(Object.getPrototypeOf(error)); // Output: [Error [TypeError]]

}

export function convert(content: any): string {
    return content.toUpperCase();
}

/*

Observe no resultado acima que a exceção: TypeError foi disparada, mas desta vez não foi exibida a lista toda de erros. O Bloco Catch apenas indicou o tipo de erro que foi disparado, porque utilizamos a instrução Object.getPrototypeOf(), que identifica o tipo do erro disparado.

*/