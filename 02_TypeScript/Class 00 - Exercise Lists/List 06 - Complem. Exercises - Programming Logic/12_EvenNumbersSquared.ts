import readlineSync from "readline-sync";

function printEvenNumsSquared(num: number): void {

    console.log("\n========== Even Numbers Squared ==========\n");
    for (let i = 1; i <= num; i++) {
        if(i % 2 === 0)
            console.log(`${i} ^ 2 = ${Math.pow(i, 2)}`);
    }
    
}

function getValidNumber(prompt: string): number {
    let num: number;
    do {
        num = readlineSync.questionInt(prompt);

        if(num < 5 || num > 2000) {
            console.log("\n-> The integer needs to be greater than or equal to 5 and less than or equal to 2000.");
        }
    } while(num < 5 || num > 2000);

    return num;

}

console.log("=============== Data Input ===============");
const num = getValidNumber("\nEnter an integer number: ");

printEvenNumsSquared(num);