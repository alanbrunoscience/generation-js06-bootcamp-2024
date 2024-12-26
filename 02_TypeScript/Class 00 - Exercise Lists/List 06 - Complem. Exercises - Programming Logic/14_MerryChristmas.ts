import readlineSync from "readline-sync";

function printMerryChristmas(num: number): void {
    console.log(`\n-> Merry Christm${'a'.repeat(num)}s!`);

    // let string1 = "Merry Christm";
    // let string2 = "";

    // for(let i = 0; i < num; i++) {
    //     string2 += 'a';
    // }

    // console.log(`\n-> ${string1}${string2}s!`);
}

function getValidNumber(prompt: string): number {
    let num: number;
    do {
        num = readlineSync.questionInt(prompt);

        if(num < 1 || num > 100) {
            console.log("\n-> The integer needs to be greater than or equal to 1 and less than or equal to 100.");
        }
    } while(num < 1 || num > 100);

    return num;

}

console.log("=============== Data Input ===============");
const num = getValidNumber("\nEnter a number that represents the number of 'a' in 'Christmas' word: ");

printMerryChristmas(num);