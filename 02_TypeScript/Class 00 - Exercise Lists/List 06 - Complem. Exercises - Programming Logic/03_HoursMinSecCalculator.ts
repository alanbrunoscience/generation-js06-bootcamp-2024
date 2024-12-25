import readlineSync = require("readline-sync");

let totalSeconds: number;
let hours: number;
let mins: number;
let secs: number;

console.log("========== Hours, Minutes, and Seconds Calculator ==========\n");
totalSeconds = readlineSync.questionInt("1) Enter total seconds: ", {limitMessage: "\n-> Invalid data type entered!\n"});

hours = Math.trunc(totalSeconds / 3600);
mins =  Math.trunc((totalSeconds % 3600) / 60);
secs =  totalSeconds % 60;

// Zero-padding for better formatting
const formattedHours = String(hours).padStart(2, '0');
const formattedMins = String(mins).padStart(2, '0');
const formattedSecs = String(secs).padStart(2, '0');

console.log(`\n-> Time expressed in (hh:mm:ss): ${formattedHours}:${formattedMins}:${formattedSecs}.`);