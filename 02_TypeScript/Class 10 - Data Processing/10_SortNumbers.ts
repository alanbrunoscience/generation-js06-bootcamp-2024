// Método sort() - Ordenação de números

let disorderedNumbers: Array<number> = [6, 7, 8, 1, 4, 5, 9, 10, 2, 3];

console.log("\nSort the elements of the array 'disorderedNumbers' in ascending order:\n");
console.dir(disorderedNumbers.sort());

/*

Note que o número 10 foi adicionado depois do 1, ao invés de ser adicionado no final. Por quê?

- A explicação é simples: o Método sort() faz a ordenação lexicográfica, ou seja, como o alfabeto é representado por strings, mesmo sendo números ele trata como se fossem strings. A string "1" vem antes da string "2", logo todos os elementos iniciados com o número 1 serão adicionados antes de todos os elementos iniciados com o numero 2.

*/