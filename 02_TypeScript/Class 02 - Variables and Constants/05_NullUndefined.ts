/* Null e Undefined

- Null é uma palavra-chave da linguagem avaliada com um valor especial, normalmente utilizado para indicar a ausência de um valor, ou seja, null indica que uma variável não possui “nenhum objeto ou valor”. A maioria das linguagens de programação tem um equivalente para o null, como nil, por exemplo, ou o próprio null;

- Undefined é uma palavra-chave da linguagem avaliada com um valor especial, que indica a ausência de valor. O valor indefinido representa uma ausência mais profunda. É o valor de variáveis que não foram inicializadas e o valor obtido quando se consulta o valor de uma propriedade de objeto ou elemento de array que não existe. O valor indefinido também é retornado por funções que não têm valor de retorno e o valor de parâmetros de função quando nenhum argumento é fornecido;

- Na prática, Null e Undefined indicam uma ausência de valor, entretanto utilizamos Undefined para representar uma ausência de valor em nível de sistema, inesperada ou como um erro, por exemplo, enquanto o Null é utilizado para representar ausência de valor em nível de programa, normal ou esperada. Se precisar atribuir um desses valores a uma variável ou propriedade ou passar um desses valores para uma função, Null quase sempre será a escolha certa.

*/

let var01: number|undefined;
console.log("Initial value of 'var01': ", var01);

let var02: any = null;
console.log("Initial value of 'var02': ", var02);

var01 = 10;
console.log("\nNew value of 'var01': ", var01);

var02 = 20;
console.log("New value of 'var02': ", var02);

/*

- Observe que a variável var01 foi definida com 2 tipos de dado: number ou undefined. Através do separador ( | ) é possível definir dois tipos diferentes para uma mesma variável.

*/