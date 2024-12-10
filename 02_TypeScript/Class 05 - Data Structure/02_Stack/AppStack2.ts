import { Stack } from "./Stack";

const stack = new Stack<string>();

stack.push("Prato azul");
stack.push("Prato verde");
stack.push("Prato vermelho");

stack.printStack();

console.log("\nExiste um prato branco na pilha? ", stack.contains("Prato branco"));

console.log();
stack.printStack();