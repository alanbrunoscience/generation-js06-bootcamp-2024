import readlineSync = require("readline-sync");

let salary: number;

console.log("========== Salary Bonus Calculation ==========\n");
salary = getValidSalary("Enter the salary: R$ ");

const result = calculateNewSalary(salary);

printFinalInfo(result.newSalary, result.adjustmentAmount, result.adjustmentPercIndex);

function printFinalInfo(newSalary: number, adjustmentAmount: number, adjustmentPercIndex: number): void {
    console.log("\n========== Salary Adjustment Information ==========\n");
    console.log(`- New Salary: R$ ${newSalary.toFixed(2)};`);
    console.log(`- Adjustment Amount: R$ ${adjustmentAmount.toFixed(2)};`);
    console.log(`- Adjustment Percentage Index: ${adjustmentPercIndex}%.`);
}

function calculateNewSalary(salary: number): { newSalary: number, adjustmentAmount: number, adjustmentPercIndex: number } {

    let adjustmentPercIndex: number;
    let adjustmentAmount: number;
    let newSalary: number;

    if(salary <= 1412.0) {
        adjustmentPercIndex = 15;
    } else if(salary <= 2824.0) {
        adjustmentPercIndex = 12;
    } else if(salary <= 4236.0) {
        adjustmentPercIndex = 10;
    } else if(salary <= 5648.0) {
        adjustmentPercIndex = 7;
    } else {
        adjustmentPercIndex = 5;
    }
    
    adjustmentAmount = ((adjustmentPercIndex / 100) * salary);
    newSalary = salary + adjustmentAmount;

    return { newSalary, adjustmentAmount, adjustmentPercIndex };

}

function getValidSalary(prompt: string): number {
    
    let salary: number;

    do {

        salary = readlineSync.questionFloat(prompt, {limitMessage: "\n-> Invalid data type entered!\n"});

        if (salary <= 0) {
            console.log("\n-> The salary must be greater than 0.\n");
        }

    } while(salary <= 0);

    return salary;

}