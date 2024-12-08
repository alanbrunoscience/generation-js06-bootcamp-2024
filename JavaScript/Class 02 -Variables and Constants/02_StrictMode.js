"use strict" // Declaração Obrigatória de Variáveis ("let", "var" ou "const")

/*

O "strict mode" ou modo estrito no JavaScript é um recurso introduzido no ECMAScript 5 (ES5) para tornar o código mais seguro, eliminando comportamentos problemáticos ou erros silenciosos da linguagem. Ele faz isso aplicando regras mais rigorosas para escrita e execução do código, ajudando os desenvolvedores a evitar erros comuns e potencialmente perigosos.

** Como ativar o "strict mode"?

Você pode ativar o modo estrito adicionando a string "use strict"; no início de um script ou de uma função.

** Principais mudanças no modo estrito

1. Declaração obrigatória de variáveis Não é permitido usar variáveis sem declará-las explicitamente com var, let ou const.
2. Proibição de nomes duplicados para propriedades de objetos Objetos não podem ter duas propriedades com o mesmo nome.
3. Parâmetros de função com nomes duplicados Nomes de parâmetros não podem se repetir.
4. Proibição de palavras reservadas futuras Palavras reservadas para versões futuras do JavaScript (implements, interface, private, protected, entre outras), não podem ser usadas como identificadores.

*/

// numero = 10; Isso não será permitido, usando o modo estrito. Para funcionar, você deve incluir "let numero = 10".

let numero = 10;

console.log("O valor de variável número é: ", numero);

numero = 100;

console.log("O valor de variável número é: ", numero);