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