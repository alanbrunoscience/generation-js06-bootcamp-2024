import readlineSync = require("readline-sync");

let loop: boolean = true;

do {
    
    try {

        let age: number = readlineSync.questionInt("Enter the person's age: ");

        validateAge(age);

        loop = false;

    } catch (error: any) {

        if (error instanceof Error)
            console.error("\nError: Enter an integer number greater than or equal to 18!\n");
        else
            console.error("Error: " + error.message);

    }

} while (loop);

function validateAge(age: number): void {

    if(age < 18)
        throw new Error("\nThe person is not fit to drive.");
    else
        console.log("\nThe person is fit to drive");

}