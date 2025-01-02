import readlineSync from "readline-sync";

function createMatrixStructure(): number [][] {
    let matrixOrder: number;

    matrixOrder = readlineSync.questionInt("Enter the matrix order: ");

    // Create a 2D array initialized with zeros
    let regularMatrix = Array.from({ length: matrixOrder }, () => Array(matrixOrder).fill(0));

    return regularMatrix;

}

// Function to fill the matrix with concentric layers
function fillMatrixWithConcentricLayers(matrix: number[][]): void {
    let n = matrix.length;
    let layerValue = 1;

    for (let layer = 0; layer < Math.ceil(n / 2); layer++) {
        // Fill top and bottom rows of the current layer
        for (let j = layer; j < n - layer; j++) {
            matrix[layer][j] = layerValue;
            matrix[n - layer - 1][j] = layerValue;
        }

        // Fill left and right columns of the current layer
        for (let i = layer; i < n - layer; i++) {
            matrix[i][layer] = layerValue;
            matrix[i][n - layer - 1] = layerValue;
        }

        layerValue++;
    }
}

function printMatrix(matrix: number[][]): void {
    console.log();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            process.stdout.write(`${matrix[i][j]} `);
        }
        console.log();
    }
}

let regularMatrix = createMatrixStructure();

// Calling the function to fill the matrix
fillMatrixWithConcentricLayers(regularMatrix);

// Print the matrix
// console.table(regularMatrix);
printMatrix(regularMatrix);
