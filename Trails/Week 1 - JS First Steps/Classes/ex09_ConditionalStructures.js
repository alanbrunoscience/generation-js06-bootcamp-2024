// Exercise: Plano de Saúde

const input = require("readline-sync");

let name = input.question("Enter your full name: ");
let age = input.questionInt("Enter your age: ");

if (age <= 0) {
    console.log("\nInvalid age! Age cannot be negative or zero.");
    process.exit(0);
} else {
    let healthPlanValue;

    if (age <= 10) {
        healthPlanValue = 100.00;
    } else if (age <= 29) {
        healthPlanValue = 200.00;
    } else if (age <= 45) {
        healthPlanValue = 300.00;
    } else if (age <= 59) {
        healthPlanValue = 500.00;
    } else if (age <= 65) {
        healthPlanValue = 600.00;
    } else {
        healthPlanValue = 1000.00;
    }

    console.log(`\n${toTitleCase(name)}, the cost of your health plan is ${new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
    }).format(healthPlanValue)}.`);
}

function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}