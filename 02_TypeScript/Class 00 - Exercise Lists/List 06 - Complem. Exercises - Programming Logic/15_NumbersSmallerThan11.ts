import readlineSync from "readline-sync";

function dataInput(): number[] {

    let numbers = [];

    console.log("=============== Data Input ===============");
    for (let i = 1; i <= 10; i++) {
        
        const num = readlineSync.questionInt(`\n${i}) Enter the ${i}${findSuffixOrdinalNumbers(i)} integer: `);
        numbers.push(num);
    }

    return numbers;
}

function findSuffixOrdinalNumbers(num: number): string {
    
    let suffix: string;

    if (num > 3 && num <= 20) {
        suffix = "th";
    } else if (num % 10 === 1 && num % 100 !== 11) {
        suffix = "st";
    } else if (num % 10 === 2 && num % 100 !== 12) {
        suffix = "nd";
    } else if (num % 10 === 3 && num % 100 !== 13) {
        suffix = "rd";
    } else {
        suffix = "th";
    }

    return suffix;
}

function printNumbersSmaller11(arrNumbers: number[]): void {

    console.log("\n\n===== Numbers Smaller than 11 And Their Positions =====\n");
    for(let i = 0; i < arrNumbers.length; i++) {
        if(arrNumbers[i] < 11){
            console.log(`- numbers[${i}] = ${arrNumbers[i]}`);
        }
    }

}

printNumbersSmaller11(dataInput());