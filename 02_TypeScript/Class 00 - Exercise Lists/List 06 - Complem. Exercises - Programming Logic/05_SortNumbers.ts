import readlineSync = require("readline-sync");

let numbers = new Array(3);

// Read input
for (let i = 0; i < 3; i++) {
    numbers[i] = readlineSync.questionInt(`${i + 1}) Enter an integer: `);
}


console.log("\n===== Original Sequence =====\n");
console.dir(numbers);

// Sort and display results
const ascending = sortAscending([...numbers]); // Use a copy of the original array
console.log("\n===== Sorted Sequence Ascendingly =====\n");
console.dir(ascending);

const descending = sortDescending([...numbers]); // Use a copy of the original array
console.log("\n===== Sorted Sequence Descendingly =====\n");
console.dir(descending);


// Function to sort in ascending order
export function sortAscending(arr: number[]): number[] {
    let aux = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[i]) {
                aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux;
            }
        }
    }
    return arr;
}

// Function to sort in descending order
export function sortDescending(arr: number[]): number[] {
    let aux = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux;
            }
        }
    }
    return arr;
}