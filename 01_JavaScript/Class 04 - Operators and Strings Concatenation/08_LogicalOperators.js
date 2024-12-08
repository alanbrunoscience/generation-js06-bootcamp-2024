/* Operadores Lógicos

- Os Operadores Lógicos são utilizados para realizar comparações e validações, criando expressões condicionais complexas:

-> && (Conjunção): Valida se dois dados são verdadeiros ("E");
-> || (Disjunção): Valida se um dos dois dados apresentados são verdadeiros, ou se os dois são verdadeiros ("OU");
-> ^ (Disjunção Exclusiva): Semelhante a Disjunção, entretanto valida apenas se um dos dois dados apresentados for verdadeiro e o outro dado for falso. Diferente da Disjunção, a opção cujo os dois dados são verdadeiros não é validada ("OU Exclusivo");
-> ! (Negação): Inverte o valor, o que é verdadeiro passa a ser falso, o que é falso passa a ser verdadeiro ("Não").

*/

"user strict"

const input = require("readline-sync");

// User's Data
const user = "user@email.com.br";
const password = "user1234";
const isAdmin = false;
const isManager = true;
const isBlock = false;

console.log("*** ACCESS YOUR ACCOUNT ***\n");

let userLogin = input.question("Enter your username: ");
let passLogin = input.question("Enter your password: ", {
    hideEchoBack: true,
});

let success = false;
let message;

if (userLogin === user && passLogin === password) {
    if (!isBlock) {
        console.log("\nActive user!");
        message = "You're welcome! Access granted successfully.";
        success = true;
    } else {
        console.log("\nInactive user! Reach out to the Platform Administrator.");
        process.exit(0);
    }

} else
    message = "\nAccess Denied!";

console.log(message);

if(success) {
    if (isAdmin || isManager) {
        console.log("\n*** Access to the Administrative Panel granted ***");
    } else {
        console.log("\n*** Access to the Administrative Panel denied ***");
    }
}