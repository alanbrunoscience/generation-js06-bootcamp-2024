/* Any

- O tipo Any é o equivalente a uma variável qualquer escrita em JavaScript. O tipo any pode receber qualquer valor que você quiser. Como o TS é tipado, neste momento você deve estar se perguntando: Por que utilizar o "Any"?;

- Imagine o seguinte cenário: você está fazendo integração da sua aplicação com uma API de terceiros e, mesmo que você tenha uma documentação dessa API, você não conhece 100% a estrutura do outro projeto. Esse é um dos cenários em que o any é mais utilizado: Quando não temos a certeza do tipo de dado que receberemos da API, utilizamos o tipo any, que recebe qualquer tipo de dado.

*/

let variable: any = "anything";
console.log("'Any' variable value: ", variable);

variable = 22;
console.log("\n'Any' variable value: ", variable);

variable = true;
console.log("\n'Any' variable value: ", variable);