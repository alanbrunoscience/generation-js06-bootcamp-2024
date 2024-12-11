import readlineSync = require("readline-sync");
import { colors } from '../../../util/colors';

export function menu(): number {

    console.log(colors.bg.black, colors.fg.green);
    console.log("****************************");
    console.log("         Calculator         ");
    console.log("****************************");
    console.log("\n1 - Add;");
    console.log("2 - Subtract;");
    console.log("3 - Multiply;");
    console.log("4 - Divide;");
    console.log("0 - Exit.");
    console.log("\n****************************");
    let option = readlineSync.questionInt("\n-> Choose an option above: ", {limitMessage: "\n-> Invalid data type entered!"});

    // Reset colors after user input
    console.log(colors.reset);

    return option;

} 

export function getNumbers(): [number, number] { 
    const number1 = readlineSync.questionFloat("\n1) Enter the first integer: ", {limitMessage: "\n-> Invalid data type entered!"});
    const number2 = readlineSync.questionFloat("2) Enter the second integer: ", {limitMessage: "\n-> Invalid data type entered!"});
    return [number1, number2];
}

export function add(number1: number, number2: number): number {
    return number1 + number2;
}

export function subtract(number1: number, number2: number): number {
    return number1 - number2;
}

export function multiply(number1: number, number2: number): number {
    return number1 * number2;
}

export function divide(number1: number, number2: number): number | null {
    let division: number = number1 / number2;
    return (division !== Infinity ? division: null);
}

export function about() {
    console.log("Created by Alan");
}