/* Pilha

- Uma Pilha é uma estrutura de dados do tipo LIFO: "O último elemento inserido na pilha é o primeiro elemento que será retirado da pilha." (Last In - First Out).

-> PUSH ou empurrar, insere um elemento no topo da pilha.
-> POP ou Excluir, retira o elemento do topo da pilha (retornando-o ou não).

*/

import { Stack } from "./Stack";

const stack = new Stack<string>();

stack.push("Prato azul");
stack.push("Prato verde");
stack.push("Prato vermelho");

stack.printStack();

console.log("\nExiste um prato branco na pilha? ", stack.contains("Prato branco"));

console.log();
stack.printStack();