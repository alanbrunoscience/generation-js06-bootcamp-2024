import readlineSync = require("readline-sync");

const colors: Array<string> = new Array<string>(5);

// Data Input
for(let i = 0; i < colors.length; i++) {
    colors[i] = readlineSync.question(`\n-> Enter the ${i+1}º color: `);
}

// Display all the colors entered
console.log("\n\n=== Colors ===\n");
for(let color of colors) {
    console.log(`-> ${color}`);
}

// Display sorted Collection Array

colors.sort();

console.log("\n\n=== Sorted Colors ===\n");
for(let color of colors) {
    console.log(`-> ${color}`);
}

