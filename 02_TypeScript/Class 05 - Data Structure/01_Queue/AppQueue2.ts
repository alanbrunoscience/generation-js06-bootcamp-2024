import readlineSync = require("readline-sync");
import { Queue } from "./Queue"

const queue = new Queue<string>();

queue.enqueue("Beatriz");
queue.enqueue("Gustavo");
queue.enqueue("Alana");
// queue.enqueue(readlinesync.question("Enter your name: "));

console.log();
queue.printQueue();

console.log();
console.log(queue.contains("Alana")); // Verificar a existência de um elemento específico na fila.

console.log();
console.log(queue.count()); // Verificar o tamanho da fila, ou seja, a quantidade de elementos.

console.log("\nElemento retirado: ", queue.dequeue()); // Retirar um elemento da fila. Remoção é sempre no início. O primeiro que entra é o primeiro a sair.

console.log();
queue.printQueue(); // Imprimir a fila.

console.log("\nPróximo elemento a ser chamado: ", queue.peek()); // Mostrar o primeiro elemento da fila, ou seja, o próximo elemento a ser chamado.