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

function invertArray(numbers: number[]): number[] {

    // let invertedArray = new Array(numbers.length);
    let aux: number;
    let decreaseIndex = numbers.length;

    for(let i = 0; i < Math.floor(numbers.length / 2); i++) {
        aux = numbers[i];
        numbers[i] = numbers[--decreaseIndex];
        numbers[decreaseIndex] = aux;
    }

    return numbers;

}

let originalArray = dataInput();

// console.log("\n\n========== Original Array ==========\n");
// console.dir(originalArray);
console.log("\n\n-> Original Array: ", originalArray.join(", "));

// console.log("\n========== Inverted Array ==========\n");
// console.dir(invertArray(originalArray));
console.log("\n-> Inverted Array: ", invertArray(originalArray).join(", "));
