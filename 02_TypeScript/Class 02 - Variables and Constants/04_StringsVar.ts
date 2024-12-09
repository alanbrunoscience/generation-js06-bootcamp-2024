/* String

- As strings armazenam valores do tipo texto. Diferente de outras linguagens de programação, no TypeScript nós podemos declarar uma string com aspas simples ou com aspas duplas.

*/

let varString01: string = 'String with single quotes';
console.log(varString01);

let varString02: string = "String with double quotes";
console.log(varString02);

/* Interpolação de Strings (Templates Strings)

O tipo string possui uma variação muito interessante, que são as Templates Strings, que também são conhecidas como Interpolação de strings. Você pode quebrar as linhas e inserir variáveis no meio da strings de forma muito mais fácil. Para isso, basta definir a string com o caractere acento grave (`), ao invés de utilizar as aspas simples ou dupla.

*/

let message: string = 'Hello World!';
let messageReceived: string = `\nThe message that was received was "${message}".`;
console.log(messageReceived);