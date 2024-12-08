"use strict"

const { text } = require("stream/consumers");

let text01 = "Generation";
let text02 = "Brasil";
let text03 = " ";

console.log("Concatenate 'text01' and 'text02': " + text01 + text02);
console.log("\nConcatenate 'text02' and 'text01': " + text02 + text01);
console.log("\nConcatenate 'text01', 'text03' and 'text02': " + text01 + text03 + text02);