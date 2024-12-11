import { menu, getNumbers, add, subtract, multiply, divide, about } from './Operations/Calculations';

let number1: number;
let number2: number;
let option: number;

do {

    option = menu();

    if(option === 0) {
        console.log("\nFinishing the program...");
        about();
        process.exit(0);
    }

    switch(option) {
        case 1:
            // Object Destructuring
            [number1, number2] = getNumbers();
            console.log(`\n-> ${number1} + ${number2} = ${add(number1, number2)}\n`);
            break;
        case 2:
            [number1, number2] = getNumbers();
            console.log(`\n-> ${number1} - ${number2} = ${subtract(number1, number2)}\n`);
            break;
        case 3:
            [number1, number2] = getNumbers();
            console.log(`\n-> ${number1} * ${number2} = ${multiply(number1, number2)}\n`);
            break;
        case 4:
            [number1, number2] = getNumbers();

            let result = divide(number1, number2);

            if(result !== null) {
                console.log(`\n-> ${number1} / ${number2} = ${divide(number1, number2)?.toFixed(2)}\n`);
            } else {
                console.log(`\n-> There is no division by zero!\n`);
            }

            break;
        default:
            console.log("\n-> Invalid option!");
    }
    
} while(true);

// function menu(): number {

//     console.log(colors.bg.black, colors.fg.green);
//     console.log("****************************");
//     console.log("         Calculator         ");
//     console.log("****************************");
//     console.log("\n1 - Add;");
//     console.log("2 - Subtract;");
//     console.log("3 - Multiply;");
//     console.log("4 - Divide;");
//     console.log("0 - Exit.");
//     console.log("\n****************************");
//     option = readlineSync.questionInt("\n-> Choose an option above: ", {limitMessage: "\n-> Invalid data type entered!"});

//     // Reset colors after user input
//     console.log(colors.reset);

//     return option;

// } 

// function getNumbers(): [number, number] { 
//     const number1 = readlineSync.questionFloat("\n1) Enter the first integer: ", {limitMessage: "\n-> Invalid data type entered!"});
//     const number2 = readlineSync.questionFloat("2) Enter the second integer: ", {limitMessage: "\n-> Invalid data type entered!"});
//     return [number1, number2];
// }

// function add(number1: number, number2: number): number {
//     return number1 + number2;
// }

// function subtract(number1: number, number2: number): number {
//     return number1 - number2;
// }

// function multiply(number1: number, number2: number): number {
//     return number1 * number2;
// }

// function divide(number1: number, number2: number): number | null {
//     let division: number = number1 / number2;
//     return (division !== Infinity ? division: null);
// }

// function about() {
//     console.log("Created by Alan");
// }