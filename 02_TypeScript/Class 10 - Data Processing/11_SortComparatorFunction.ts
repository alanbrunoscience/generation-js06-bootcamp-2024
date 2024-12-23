/* Função Comparadora

- Esta função terá a tarefa de comparar dois elementos do array em cada iteração, para identificar quem é o maior entre eles. Partindo da premissa que os dois argumentos sejam a e b, a função comparadora de ordenação dos números fará a operação matemática a - b, que retornará 3 resultados possíveis:

1. Um valor maior do que 0 se a for maior que b, invertendo os elementos de posição (o elemento b deve vir antes do que o elemento a);

2. 0 se a for igual a b, mantendo os 2 elementos nas posições atuais (os elementos a e b deve vir na sequência);

3. Um valor menor do que 0 se a for menor que b, mantendo os elementos nas posições atuais (o elemento a deve vir antes do que o elemento b).

Sintaxe - Método Sort com Função Comparadora:

let variavel = nome_do_array.sort(funcao_comparadora);

*/

// Método sort() - Ordenação de números com a Função Comparadora

let disorderedNumbers2: Array<number> = [6, 7, 8, 1, 4, 5, 9, 10, 2, 3];

console.log("\nSort the elements of the array 'disorderedNumbers2' in ascending order:\n");
let sortedNumbersAsc = disorderedNumbers2.sort((a,b) => {return a - b}).map(n => n);

console.dir(sortedNumbersAsc);