"use strict"

const input = require("readline-sync");

let grossSalary, nightShiftAllowance, overtime, discounts, netSalary;

grossSalary = input.questionFloat("1) Enter the gross salary value: R$ ");
nightShiftAllowance = input.questionFloat("2) Enter the night shift allowance value: R$ ");
overtime = input.questionFloat("3) Enter the overtime value: R$ ");
discounts = input.questionFloat("4) Enter the discounts value: R$ ");

netSalary = grossSalary + nightShiftAllowance + (overtime * 5) - discounts;

console.log("\n-> Value of the net salary: ", new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
}).format(netSalary));