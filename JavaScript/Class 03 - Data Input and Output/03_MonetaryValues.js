"use strict"

let value = 10.000;
let area = 45.456739;
let grossSalary = 3500.44;

console.log("Formatting - Real Number:\t %f", value.toFixed(1));
console.log("Formatting - Real Number:\t %f", area.toFixed(2));
console.log("Formatting - Monetary Value:\t %s", new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL",
    }).format(grossSalary));