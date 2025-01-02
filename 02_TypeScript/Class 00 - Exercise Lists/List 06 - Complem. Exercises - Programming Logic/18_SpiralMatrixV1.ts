import readlineSync from "readline-sync";

let matrix: number[][] = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const totalRows = matrix.length;
const totalCols = matrix[0].length;
let result: number[] = [];

// Helper function to check if the position is valid
function isValidPosition(i: number, j: number, visited: boolean[][]): boolean {
    return (0 <= i && i < totalRows) && (0 <= j && j < totalCols) && !visited[i][j];
}

// Function to fill matrix spirally
function fillMatrixSpirally(matrix: number[][]): number[] {
    let visited = Array.from({ length: totalRows }, () => Array(totalCols).fill(false));
    let directions = [ [0, 1], [1, 0], [0, -1], [-1, 0] ]; // Right, Down, Left, Up
    let dirIndex = 0;

    let i = 0, j = 0;

    for (let count = 0; count < totalRows * totalCols; count++) {
        result.push(matrix[i][j]);
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
        }
    }

    return result;
}

// Print the original matrix
console.table(matrix);

// Call the function and print the result
console.dir(fillMatrixSpirally(matrix));
