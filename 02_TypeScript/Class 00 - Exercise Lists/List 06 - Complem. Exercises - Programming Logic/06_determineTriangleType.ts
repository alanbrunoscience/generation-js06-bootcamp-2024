import readlineSync = require("readline-sync");

let a: number;
let b: number;
let c: number;

try {

    console.log("============ Triangle Type Determiner ============\n");
    a = getValidSize("1) Enter the size value for side 'A': ");
    b = getValidSize("\n2) Enter the size value for side 'B': ");
    c = getValidSize("\n3) Enter the size value for side 'C': ");

    validateTriangle(a, b, c);

} catch(error: any) {
    console.error("\nError: " + error.message);
}

function getValidSize(prompt: string): number {
    let size: number;
    do {
        size = readlineSync.questionInt(prompt, {
            limitMessage: "\n-> Invalid data type entered!\n"
        });
        if (size <= 0) {
            console.log("\n-> The size value must be greater than 0.\n");
        }
    } while (size <= 0);
    return size;
}

function validateTriangle(a: number, b: number, c: number): void {

    if(a >= (b + c) || b >= (a + c) || c >= (a + b)) {
        throw new Error(`The sizes provided do not form a triangle. Ensure that each side is less than the sum of the other two sides!`);
    } 

    console.log("\n\nThe triangle type is...\n");

    if(a === b && a === c) {
        console.log("\n*** Equilateral Triangle ***\n");
    } else if (a === b || b === c || a === c) {
        console.log("\n*** Isosceles Triangle ***\n");
    } else {
        console.log("\n*** Scalene Triangle ***\n");
    }

    console.log(`-> A: ${a};`);
    console.log(`-> B: ${b};`);
    console.log(`-> C: ${c}.`);
    
}