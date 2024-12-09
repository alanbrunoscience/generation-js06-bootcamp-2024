/* Collection Set 

- A Collection Set é uma coleção de elementos ordenados pela sequência de inserção, que não permite valores duplicados, ou seja, armazena apenas valores únicos.

- Como qualquer outro objeto em TypeScript/JavaScript, o Set possui regras específicas sobre como funciona e é utilizado. Ele é um objeto de dados que contém uma coleção de valores exclusivos, ou seja, não permite a duplicação de itens. Caso um item duplicado seja adicionado, apenas a primeira instância será mantida no conjunto.

- Ao contrário do Array, o Set não possui um método para acessar um elemento diretamente pelo seu índice, pois seus elementos não são indexados.

- Os principais benefícios de usar uma Collection Set envolvem otimização e desempenho nas operações de busca. Internamente, o Set é implementado como uma tabela hash ou árvore de pesquisa, o que proporciona um tempo de busca constante. Portanto, se você estiver lidando com uma grande coleção de valores e sua principal preocupação for garantir a unicidade dos itens, utilizar um Set é a escolha ideal.

*/

// Create a Collection Set, of type "string", called fruits and initialize it
const setFruits: Set<string> = new Set<string>(["Avocado", "Banana", "Jaboticaba", "Kiwi", "Apple", "Strawberry", "Pear", "Jaboticaba"]);

// Display on the screen all the fruits added. To display the fruits, it'll be used the For...of loop
console.log("=== Fruits ===\n");
for(let fruit of setFruits) {
    console.log(fruit);
}

// Add new fruits
setFruits.add("Kiwi");
setFruits.add("Pitaya");
setFruits.add("Blackberry");
setFruits.add("Cashew");

// Display the data stored in the Set Collection. Note that duplicated fruits weren't inserted again
console.log("\n=== Fruits Updated ===\n");
for(let fruit of setFruits) {
    console.log(fruit);
}

// Check if an element is stored in the Set Collection
console.log(`\n-> Is there Kiwi fruit in the Set Collection? ${setFruits.has("Kiwi")}.`);

// Remove an element from the Set collection
setFruits.delete("Kiwi");
console.log(`\n-> The Kiwi fruit was removed from the Set Collection!`);

console.log("\n=== Fruits Updated ===\n");
for(let fruit of setFruits) {
    console.log(fruit);
}

// Check, after the deletion, if the element still exists in the Set Collection
console.log(`\n-> Is there Kiwi fruit in the Set Collection? ${setFruits.has("Kiwi")}.`);

// Clear the Set Collection
setFruits.clear();

console.log(`\n-> All the items were removed from the Set Collection.`);

console.log(`\n-> The current size of the Set collection: ${setFruits.size}.`);