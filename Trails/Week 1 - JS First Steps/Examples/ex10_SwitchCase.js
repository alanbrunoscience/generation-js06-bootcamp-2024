// Exercise: Plano de Saúde

const input = require("readline-sync");

let name = input.question("1) Enter your full name: ");
let ageGroup = input.questionInt("\n2) Choose an option corresponding to your age group: " +
    "\n\n\t1 - Until 10 years old (including);" + 
    "\n\t2 - Greater than 10 and less than or equal to 29 years old;" +
    "\n\t3 - Greater than 29 and less than or equal to 45 years old;" +
    "\n\t4 - Greater than 45 and less than or equal to 59 years old;" +
    "\n\t5 - Greater than 59 and less than or equal to 65 years old;" +
    "\n\t6 - Greater than 65 years old." +
    "\n\n-> ");

let healthPlanValue;

switch(ageGroup) {
    case 1:
        healthPlanValue = 100.00;
        break;
    case 2:
        healthPlanValue = 200.00;
        break;
    case 3:
        healthPlanValue = 300.00;
        break;
    case 4:
        healthPlanValue = 500.00;
        break;
    case 5:
        healthPlanValue = 600.00;
        break;
    case 6:
        healthPlanValue = 1000.00;
        break;
    default:
        console.log("\nInvalid age group!");
        // process.exit(0);
}

if(healthPlanValue) {
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