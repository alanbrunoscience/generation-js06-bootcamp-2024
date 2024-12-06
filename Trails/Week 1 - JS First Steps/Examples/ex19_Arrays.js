"use strict"

const input = require("readline-sync");

let arrayStrings = ["Boxer", "Pastor Alemão", "Pinscher", "Husky Siberiano", "Corgi"];

for (let i = 0; i < arrayStrings.length; i++) {
    console.log(`${i + 1}º element: ${arrayStrings[i]}`);
}

console.log(`\nThe array's length is: ${arrayStrings.length}`);