import readline = require("readline-sync");

let loop: boolean = true;

do {
    try {
        let age: number = readline.questionInt("\n1) Enter the age: ");
        validateAge(age);
        loop = false;
    } catch(error: any) {
        console.error(error.name);
        console.error(error.message);
        console.error("\nYou entered an age under 18.");
    }

} while(loop);

function validateAge(age: number): void {
    if (age >= 18)
        console.log("\nThe person is of legal age!");
    else
        throw new Error("\nThe person is a minor");

}