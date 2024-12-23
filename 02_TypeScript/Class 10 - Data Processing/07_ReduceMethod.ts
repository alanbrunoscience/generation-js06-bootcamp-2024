/* Método reduce

- O Método reduce() é utilizado para iterar através dos valores de um array e condensar todos os valores em um único valor (consolidação). Geralmente, este único valor é a soma de todos os elementos, mas podem ser outros como a multiplicação, a média, entre outros. Outro uso muito comum do método reduce() é remover os elementos repetidos de um array, criando um novo array com elementos únicos. O Método reduce() possui muitas utilidades e pode ser utilizado em diversos casos.

Sintaxe:

let variavel = nome_do_array.reduce(arrow_function);

- Note que no parâmetro do método reduce() é necessário passar uma Arrow Function, indicando a operação de redução que será realizada. A variável que receberá o resultado do processamento do método reduce() será uma variável ou array do mesmo tipo de dado do array que será reduzido.

- Um ponto de atenção importante em relação ao método reduce() é que ele assume uma função (Arrow Function) como parâmetro, entretanto essa função, chamada de Callback, pode receber até 4 argumentos:

Sintaxe - Callback Function:

let variavel = nome_do_array.forEach((
        acumulador, 
        elemento_atual, 
        indice_atual, 
        array_original
    ) => {
    // Corpo da função
}, valor_inicial);

- acumulador: A variável que responsável por guardar o valor acumulado na ultima iteração e que será inicializada com o valor inicial;

- Caso o valor inicial não seja informado de forma explícita, o acumulador será inicializado com o primeiro elemento do array. A passagem deste parâmetro é obrigatório;

- elemento atual: O valor do elemento que está sendo iterado neste momento. A passagem deste parâmetro é obrigatório;

- índice atual: O índice do elemento atual que está sendo iterado neste momento. A passagem deste parâmetro é opcional;

- array original: O array original que está sendo iterado. A passagem deste parâmetro é opcional.

*/

let numbers1: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("\nSum all elements of the array 'numbers1':\n");
let sumNumbers = numbers1.reduce((accumulator, number) => accumulator += number);
console.log(sumNumbers);

/*

- Neste exemplo passamos apenas os parâmetros acumulador e elemento atual. Como não informamos o elemento inicial, ele utilizou o primeiro elemento do array estados como elemento inicial. A variável acumulador recebe a cada iteração o seu valor atual somado ao elemento atual da iteração (variável numero). Ao final, a variável 'sumNumbers' receberá o resultado final da soma, armazenado na variável acumulador.

*/