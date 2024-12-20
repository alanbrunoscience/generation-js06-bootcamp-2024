import readlineSync = require("readline-sync");
import { SimpleException } from "./SimpleException";

let result: number | null;
let loop: boolean = true;

let number1: number = readlineSync.questionFloat("1) Enter the first number: ");

do {

    try {
        
        let number2: number = readlineSync.questionFloat("\n2) Enter the second number: ");

        result = divide(number1, number2);

        // console.log(`${number1} / ${number2} = ${result ? result : "There is no division by zero!"}`);
        console.log(`\n-> ${number1} / ${number2} = ${result}`);

        loop = false;

    } catch(error: any) {
        if (error instanceof SimpleException) {
            console.error(error.name);
            console.error(error.message);
            console.error("\nTry again!");
        } else {
            console.error("\n Unexpected error! "); // Typing a letter
        }
    }
    
} while (loop);

function divide(number1: number, number2: number): number | null {
    if (number2 == 0)
        throw new SimpleException("There is no division by zero!");

    return number1 / number2;
}
