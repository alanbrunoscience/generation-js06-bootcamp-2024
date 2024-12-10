/* Fila

- Uma Fila é uma estrutura de dados do tipo FIFO: "o primeiro elemento que entra é o primeiro elemento que sai" (First In, First Out). A ideia fundamental da fila é que só podemos inserir um novo elemento no final da fila e só podemos retirar um elemento do início.

*/

import { Queue } from "./Queue";

const queue = new Queue<number>();

for (let i: number = 1; i <= 10; i++) {
    queue.enqueue(i); // This method is used to add an element to the end of the queue.
}

console.log("\nShow all queue elements:\n");
queue.printQueue();

console.log("\n-> Remove the element: " + queue.dequeue()); // This method is used to remove the first element from the queue.

console.log("\nShow all queue elements:\n");
queue.printQueue();

console.log("\n-> Add element '11'.");
queue.enqueue(11);

console.log("\nShow all queue elements:\n");
queue.printQueue();

console.log("\n-> Display the first element in the queue: " + queue.peek());

console.log("\n-> View queue size: " + queue.count());

console.log("\n-> Check if element '4' exists in the queue? " + queue.contains(4));

console.log("\n-> Check if element '14' exists in the queue? " + queue.contains(14));

console.log("\n-> Clear the queue...");

queue.clear();

console.log("\n-> Is the queue empty? " + queue.isEmpty());