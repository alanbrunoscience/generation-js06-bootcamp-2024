/*

- Ao contrário de uma variável, uma constante não pode ser declarada sem um valor inicial e, além disso, este valor não pode ter seu valor alterado por atribuição direta;

- Ao declarar uma variável com const, é criada uma referência somente de leitura a um valor. Isso não significa que o valor é imutável, mas sim que o identificador da constante não pode ser alterado;

- Se o valor armazenado na constante for um objeto, por exemplo, os atributos do objeto podem ser modificados através de seus métodos, mas não é possível atribuir novos valores diretamente aos atributos do objeto.

*/

"use strict"

const pi = 3.1415;
console.log(pi);

pi = 3.1416; // Isso gerará um código de erro ("TypeError: Assignment to constant variable"), pois estamos tentando modificar o valor de uma constante, após a sua inicialização.