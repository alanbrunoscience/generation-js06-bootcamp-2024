const input = require("readline-sync");

let n1, n2, n3, n4, diff;

n1 = input.questionFloat("1) Enter the first value, please: ");
n2 = input.questionFloat("2) Enter the second value, please: ");
n3 = input.questionFloat("3) Enter the third value, please: ");
n4 = input.questionFloat("4) Enter the fourth value, please: ");

diff = (n1 * n2) - (n3 * n4);

console.log(`\n-> Difference: ${diff.toFixed(2)}`);