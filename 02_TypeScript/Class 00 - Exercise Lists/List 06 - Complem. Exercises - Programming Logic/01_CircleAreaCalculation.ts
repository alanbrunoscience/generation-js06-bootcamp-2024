import readlineSync = require("readline-sync");

let radius: number, area: number;

console.log("========== Circle Area Calculator ==========\n");
radius = readlineSync.questionFloat("1) Enter a radius value (cm): ", {limitMessage: "\n-> Invalid data type entered!\n"});

// const pi = 3.1415;
// area = pi * radius ** 2;

area = Math.PI * Math.pow(radius, 2);

console.log(`\n-> The circle area is ${area.toFixed(2)} cm².`);