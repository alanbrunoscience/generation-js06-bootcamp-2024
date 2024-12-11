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