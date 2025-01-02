import readlineSync from "readline-sync";

function getValidColumn(prompt: string): number {

    let columnNumber: number;

    do {
        columnNumber = readlineSync.questionInt(prompt);

        if(columnNumber < 0 || columnNumber > 11) {
            console.log("\n-> The line number must be greater than or equal to 0 and less than or equal to 11.");
        }

    } while(columnNumber < 0 || columnNumber > 11);

    return columnNumber;

}

function getOperation(): string {

    const mathOps = [
        'Sum',
        'Average'
    ];

    console.log("\n2) Select the math operation:");
    let operation = readlineSync.keyInSelect(mathOps, "> ", {cancel: false});

    return mathOps[operation];

}

function generateRandomMatrix(): number[][] {

    let matrix: number[][] = [];

    for (let i = 0; i < 12; i++) {
        matrix[i] = [];
        for (let j = 0; j < 12; j++) {
            matrix[i][j] = Math.floor(Math.random() * 10) + 1;
        }
    }

    return matrix;

}

function sumOrCalculateAverageByColumn(matrix: number[][], columnNumber: number, operation: string): void {

    let result: number = 0;

    for(let i = 0; i < 12; i++) {
        result += matrix[i][columnNumber];
    }

    operation === "Sum" ? console.log(`\n-> The sum of all the elements in column ${columnNumber} is ${result}.\n`) : console.log(`\n-> The average of all the elements in column ${columnNumber} is ${(result / 12).toFixed(2)}.\n`);

}

let columnNumber = getValidColumn("1) Enter column number between 0 and 11 (inclusive): ");
let operation = getOperation();
console.log()
let matrix = generateRandomMatrix();
console.table(matrix);
console.log()
sumOrCalculateAverageByColumn(matrix, columnNumber, operation);