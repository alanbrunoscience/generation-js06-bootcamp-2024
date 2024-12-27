import readlineSync from "readline-sync";

function getValidNumber(prompt: string): number {
    let num: number;
    do {
        num = readlineSync.questionInt(prompt);

        if(num < 2 || num > 50) {
            console.log("\n-> The integer needs to be greater than or equal to 2 and less than or equal to 50.");
        }
    } while(num < 2 || num > 50);

    return num;

}

function fillUpArray(num: number): number[] {

    let filledArray: number[] = [];
    let i = 0;

    while(i < 100) {
        for(let j = 0; j < num; j++) {
            if (i >= 100) break; // Ensures that it does not exceed 100 positions
            filledArray[i] = j;
            i++;
        }
        
    }

    return filledArray;

}

console.log("=============== Data Input ===============");
const num = getValidNumber("\nEnter an integer number: ");

console.log("\n============== Array Output ==============\n");
console.dir(fillUpArray(num));