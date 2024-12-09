const fruits: Set <string> = new Set<string>();

fruits.add("Banana");
fruits.add("Apple");
fruits.add("Khaki");
fruits.add("Banana");
fruits.add("Mango");

console.table(fruits);

console.log("\n-> Is the strawberry in the Set Collection? ", fruits.has("Strawberry"));

fruits.delete("Khaki");

console.log("\n-> Set without 'Khaki:'\n");
console.table(fruits);

// Sorting a Set
let setSorted: Array<string> = Array.from(fruits).sort();

console.log("\nSet Sorted:\n");
console.table(setSorted);