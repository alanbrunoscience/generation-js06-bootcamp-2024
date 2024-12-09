/* Collection Set 

- A Collection Set é uma estrutura de dados única que modela a definição matemática de um conjunto de elementos. Em essência, um Set é uma coleção de valores não duplicados, ou seja, ele não aceita elementos repetidos. Cada elemento armazenado no Set é tratado como único dentro da coleção.

- No caso do TypeScript, o Set pode ser utilizado para armazenar valores de um tipo de dado específico, garantindo maior consistência no código. Além disso, o Set é uma coleção ordenada, o que significa que os elementos são recuperados na mesma ordem em que foram adicionados. Embora o Set não utilize chave-valor como os objetos ou Maps, ele segue o princípio de tratar cada elemento como chave e valor iguais.

- Fazendo uma analogia com Blocos de montar, um Set seria como uma coleção de blocos, ou seja, um conjunto, sem elementos repetidos, ordenados na sequência em que foram inseridos

*/

const fruits: Set <string> = new Set<string>();

fruits.add("Banana");
fruits.add("Apple");
fruits.add("Khaki");
fruits.add("Banana");
fruits.add("Mango");

console.table(fruits);

console.log("\n-> Is the strawberry on set? ", fruits.has("Strawberry"));

fruits.delete("Khaki");

console.log("\nSet without 'Khaki:'\n");
console.table(fruits);

// Sorting a Set
let setSorted: Array<string> = Array.from(fruits).sort();

console.log("\nSet Sorted:\n");
console.table(setSorted);
