import readlineSync = require("readline-sync");

let totalAmount: number;
let amountFormatted: number;
let remainingAmount: number;
const denominations = [200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05, 0.01];
const counterBanknotes = new Array(denominations.length).fill(0);
let totalUsedDenominations: number = 0;
let currentPrintCount: number = 0;


console.log("========== Banknote Calculator ==========\n");

totalAmount = readlineSync.questionFloat("1) Enter the total amount: R$ ", {limitMessage: "\n-> Invalid data type entered!\n"});

while(totalAmount <= 0) {
    totalAmount = readlineSync.questionFloat("\n-> Please enter a positive amount: ");
}

amountFormatted = parseFloat(totalAmount.toFixed(2));

remainingAmount = amountFormatted;

for(let i = 0; i < denominations.length; i++) {
    if(remainingAmount >= denominations[i]) {
        counterBanknotes[i] = Math.trunc(remainingAmount / denominations[i]);
        remainingAmount = Math.round((remainingAmount % denominations[i]) * 100) / 100;
        totalUsedDenominations++;
    }
}

console.log(`\n\n========= Breakdown =========\n`);
console.log(`-> Entered amount: R$ ${totalAmount.toFixed(2)}.\n`);

denominations.forEach((denomination, i) => {
    if (counterBanknotes[i] > 0) {
        currentPrintCount++;
        const type = denomination >= 1 ? "banknote" : "coin";
        const punctuation = currentPrintCount !== totalUsedDenominations ? ";" : ".";
        console.log(`- ${counterBanknotes[i]} ${type}(s) of R$ ${denomination.toFixed(2)}${punctuation}`);
    }
});


// console.log(`\n========= Breakdown =========\n\n-> Entered amount: R$ ${amountFormatted.toFixed(2)}.\n`);
// for(let i = 0; i < denominations.length; i++) {
//     if(denominations[i] >= 1) {
//         if(i < (denominations.length - 1))
//             console.log(`- ${counterBanknotes[i]} banknote(s) of R$ ${denominations[i].toFixed(2)};`);
//         else
//             console.log(`- ${counterBanknotes[i]} banknote(s) of R$ ${denominations[i].toFixed(2)}.`);
//     } else {
//         if(i < (denominations.length - 1))
//             console.log(`- ${counterBanknotes[i]} coin(s) of R$ ${denominations[i].toFixed(2)};`);
//         else
//             console.log(`- ${counterBanknotes[i]} coin(s) of R$ ${denominations[i].toFixed(2)}.`);
//     }
    
// }