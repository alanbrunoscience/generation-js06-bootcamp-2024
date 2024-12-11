// Function with Optional Arguments

const result2 = add(10, 20);
console.log("\n-> The result of adding two parameters is: " + result2);

const result3 = add(10, 20, 30);
console.log("\n-> The result of adding three parameters is: " + result3);

function add(number1: number, number2: number, number3?: number): number{
    
    if(number3 != undefined)
        return number1 + number2 + number3;

    return number1 + number2;

}