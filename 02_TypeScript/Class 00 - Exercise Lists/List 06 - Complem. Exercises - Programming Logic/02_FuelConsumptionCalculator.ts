import readlineSync = require("readline-sync");

const fuelEfficiency: number = 12.00;

let timeSpent: number, averageSpeed: number, distance: number, fuelConsumption: number;

console.log("============== Fuel Consumption Calculator ==============\n");

timeSpent = readlineSync.questionInt("1) Enter the time spent on the trip (in hours): ", {limitMessage: "\n-> Invalid data type entered!\n"});
averageSpeed = readlineSync.questionFloat("2) Enter the average speed during the trip (Km/h): ", {limitMessage: "\n-> Invalid data type entered!\n"});

distance = averageSpeed * timeSpent;

fuelConsumption = distance / fuelEfficiency;

console.log(`\n-> Total fuel consumption used (in liters): ${fuelConsumption.toFixed(2)}.`);


