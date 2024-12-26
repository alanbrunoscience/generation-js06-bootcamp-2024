import readlineSync from "readline-sync";

let num: number;

console.log("============ Dividers ============");
num = getValidNumber("\n1) Enter an integer number: ");

findDividers(num);

function findDividers(num: number): void {
    console.log(`\n========= Dividers of ${num} =========\n`);
    for(let i = 1; i <= num; i++) {
        if(num % i == 0) {
            console.log(i);
        }
    }
}

function getValidNumber(prompt: string): number {
    
    do {
        num = readlineSync.questionInt(prompt);
        if(num <= 0) {
            console.log("\n-> The integer needs to be greater than 0.");
        }
    } while(num <= 0);

    return num;

}