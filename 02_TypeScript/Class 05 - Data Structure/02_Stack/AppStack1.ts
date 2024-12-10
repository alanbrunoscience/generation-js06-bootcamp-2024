/* Pilha

- Uma Pilha é uma estrutura de dados do tipo LIFO: "O último elemento inserido na pilha é o primeiro elemento que será retirado da pilha." (Last In - First Out), ou seja, um elemento sempre será inserido e retirado do topo da pilha.

-> PUSH ou empurrar, insere um elemento no topo da pilha.
-> POP ou Excluir, retira o elemento do topo da pilha (retornando-o ou não).

*/

import { Stack } from "./Stack";

const stack = new Stack<string>();

stack.push("Green Dish");
stack.push("Blue Dish");
stack.push("White Dish");
stack.push("Yellow Dish");
stack.push("Red Dish");

console.log("\nShow all stack elements:\n");
stack.printStack();

console.log("\n-> Remove the element: " + stack.pop());

console.log("\nShow all stack elements:\n");
stack.printStack();

console.log("\n-> Add element 'Purple Dish'.");
stack.push("Purple Dish");

console.log("\nShow all stack elements:\n");
stack.printStack();

console.log("\n-> Display the top element of the stack: " + stack.peek());

console.log("\n-> View stack size: " + stack.count());

console.log("\n-> Check if element 'Green Dish' exists in the stack? " + stack.contains("Green Dish"));

console.log("\n-> Check if element 'Lime Green Plate' exists in the stack? " + stack.contains('Lime Green Plate'));

console.log("\n-> Clear the stack...");

stack.clear();

console.log("\n-> Is the stack empty? " + stack.isEmpty());