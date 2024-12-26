import readlineSync from "readline-sync";

console.log("\n========== Sum Of Odd Numbers ==========");
let n1: number = readlineSync.questionInt("\n1) Enter the first integer number: ");
let n2: number = readlineSync.questionInt("\n2) Enter the second integer number: ");

let [start, end] = n1 < n2 ? [n1, n2] : [n2, n1];
console.log(`\n-> The sum of all odd numbers between ${start} and ${end} is ${sumOddNumbers(start, end)}.`);

function sumOddNumbers(n1: number, n2: number): number {

    let sumOddNums = 0;
    
    for (let i = n1; i <= n2; i++) {
        if (i % 2 !== 0)
            sumOddNums += i;
    }

    return sumOddNums;

}