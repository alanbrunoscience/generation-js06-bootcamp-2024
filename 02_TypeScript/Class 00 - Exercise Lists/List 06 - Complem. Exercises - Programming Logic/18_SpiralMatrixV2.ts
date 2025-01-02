import readlineSync from "readline-sync";

let matrixOrder: number;

matrixOrder = readlineSync.questionInt("Enter the matrix order: ");

// Creating a bi-dimensional array
let regularMatrix = new Array(matrixOrder); // Creating Rows

for (let i = 0; i < regularMatrix.length; i++) {
    regularMatrix[i] = Array(matrixOrder); // Creating Columns
}

const totalRows = regularMatrix.length;
const totalCols = regularMatrix[0].length;
let cellInitialValue = 1;

// Helper function to check if the position is valid
function isValidPosition(i: number, j: number, visited: boolean[][]): boolean {
    return (0 <= i && i < totalRows) && (0 <= j && j < totalCols) && !visited[i][j];
}

// Function to fill matrix spirally
function fillMatrixSpirally(regularMatrix: number[][]): void {
    let visited = Array.from({ length: totalRows }, () => Array(totalCols).fill(false));
    let directions = [ [0, 1], [1, 0], [0, -1], [-1, 0] ]; // Right, Down, Left, Up

    let dirIndex = 0;
    let i = 0, j = 0;

    for (let count = 0; count < totalRows * totalCols; count++) {
        regularMatrix[i][j] = cellInitialValue;
        visited[i][j] = true;

        let nextI = i + directions[dirIndex][0];
        let nextJ = j + directions[dirIndex][1];

        if (isValidPosition(nextI, nextJ, visited)) {
            i = nextI;
            j = nextJ;
        } else {
            dirIndex = (dirIndex + 1) % 4; // Change direction
            i += directions[dirIndex][0];
            j += directions[dirIndex][1];

            // Increments the value when returning to the initial direction (new layer)
            if(dirIndex === 0) {
                cellInitialValue++;
            }       
        }
    }
}

fillMatrixSpirally(regularMatrix);

// Print the matrix
console.table(regularMatrix);