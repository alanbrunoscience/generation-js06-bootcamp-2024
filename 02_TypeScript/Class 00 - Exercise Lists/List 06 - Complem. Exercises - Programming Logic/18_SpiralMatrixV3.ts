import readlineSync from "readline-sync";

let matrixOrder: number;

matrixOrder = readlineSync.questionInt("Enter the matrix order: ");

// Create a 2D array initialized with zeros
let regularMatrix = Array.from({ length: matrixOrder }, () => Array(matrixOrder).fill(0));

// Function to fill the matrix with concentric layers
function fillMatrixWithConcentricLayers(matrix: number[][]): void {
    let n = matrix.length;
    let layerValue = 1;
    console.log(Math.ceil(n / 2));

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

fillMatrixWithConcentricLayers(regularMatrix);

// Print the matrix
console.table(regularMatrix);
