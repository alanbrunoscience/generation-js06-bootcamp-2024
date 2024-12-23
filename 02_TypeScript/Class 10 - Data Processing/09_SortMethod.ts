/* Método sort

- O Método sort() é utilizado para Ordenar os elementos de um Array em Ordem Crescente.

Sintaxe:

nome_do_array.sort();
nome_do_array.reverse();

- Um ponto importante em relação a ordenação do Método sort() é que ele não faz uma ordenação em Ordem Alfabética. Ele faz uma Ordenação Lexicográfica, que funciona perfeitamente com strings;

- A Ordenação Lexicográfica parte do seguinte principio: Cada caractere é representado por um byte e portanto tem um valor entre 0 e 255. Essa premissa torna possível comparar caracteres e dizer se um caractere é menor ou maior do que o outro.

Exemplo:

5 🡪 53

A 🡪 65

5 < A

Logo podemos afirmar que 5 é lexicograficamente menor do que A.

Através destas comparações, que o Método sort() fará a ordenação dos elementos.

*/

let states2: Array<string> = [
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Espírito Santo",
    "Rio Grande do Sul",
    "Santa Catarina",
    "Paraná"
];

console.log("\nSort the elements of the 'states2' array in ascending order:\n");
console.dir(states2.sort());