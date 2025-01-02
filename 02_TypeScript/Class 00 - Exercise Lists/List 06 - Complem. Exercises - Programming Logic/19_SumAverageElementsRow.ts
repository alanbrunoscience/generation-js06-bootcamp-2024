import readlineSync from "readline-sync";

function getValidRow(prompt: string): number {

    let lineNumber: number;

    do {
        lineNumber = readlineSync.questionInt(prompt);

        if(lineNumber < 0 || lineNumber > 11) {
            console.log("\n-> The line number must be greater than or equal to 0 and less than or equal to 11.");
        }

    } while(lineNumber < 0 || lineNumber > 11);

    return lineNumber;

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

function sumOrCalculateAverageByRow(matrix: number[][], lineNumber: number, operation: string): void {

    let result: number = 0;

    for(let j = 0; j < 12; j++) {
        result += matrix[lineNumber][j];
    }

    operation === "Sum" ? console.log(`\n-> The sum of all the elements in line ${lineNumber} is ${result}.\n`) : console.log(`\n-> The average of all the elements in line ${lineNumber} is ${(result / 12).toFixed(2)}.\n`);

}

let row = getValidRow("1) Enter a number row between 0 and 11 (including): ");
let operation = getOperation();
console.log()
let matrix = generateRandomMatrix();
console.table(matrix);
console.log()
sumOrCalculateAverageByRow(matrix, row, operation);