// Functions with 2 return types and arguments

let divisionResult: any;

divisionResult = divide(4, 0);

if(divisionResult != null) {
    console.log(`\n-> The division result is ${divisionResult}.`);
} else {
    console.log(`\n-> There is no division by zero.`);
}

// Function Declaration
function divide(number1: number, number2: number): number | null {

    let division = number1 / number2;

    return(division != Infinity ? division : null);

}