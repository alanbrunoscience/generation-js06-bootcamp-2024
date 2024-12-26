import readlineSync from "readline-sync";

function printSquaresCubes(num: number): void {

    console.log("\n======== Squared And Cubed Numbers ========\n");
    for (let i = 1; i <= num; i++)
        console.log(`${i} ${Math.pow(i, 2)} ${Math.pow(i, 3)}`);
    
}

function getValidNumber(prompt: string): number {
    let num: number;
    do {
        num = readlineSync.questionInt(prompt);

        if(num < 1 || num > 1000) {
            console.log("\n-> The integer needs to be greater than or equal to 1 and less than or equal to 1000.");
        }
    } while(num < 1 || num > 1000);

    return num;

}

console.log("=============== Data Input ===============");
const num = getValidNumber("\nEnter an integer number: ");

printSquaresCubes(num);