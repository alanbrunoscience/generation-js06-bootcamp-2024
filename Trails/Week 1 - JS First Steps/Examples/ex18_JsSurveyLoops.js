/*
|  Sport Code  |   Sport Name   |      
|      1       |     Soccer     |
|      2       |   Volleyball   |
|      3       |   Basketball   |
|      4       |      Other     |
*/

const input = require("readline-sync");

let age,
    sportCode,
    soccerCount = 0,
    volleyOver18 = 0,
    basketballUnder18 = 0,
    other = 0,
    controlLoop = "S";

while(controlLoop === "S") {
    
    age = input.questionInt("1) How old are you? ");
    
    do {

        sportCode = input.questionInt("\n2) Enter your favorite sport:\n\n\t|  Sport Code  |   Sport Name   |" +
        "\n\t|      1       |     Soccer     |" +
        "\n\t|      2       |   Volleyball   |" +
        "\n\t|      3       |   Basketball   |" +
        "\n\t|      4       |      Other     |\n\n-> ");

        if(sportCode < 1 || sportCode > 4) {
            console.log("\n-> Enter a number between 1 and 4 (including)!")
        }


    }while(sportCode < 1 || sportCode > 4);

    if(sportCode === 1)
        soccerCount++;

    if(sportCode === 2 && age >= 18)
        volleyOver18++;

    if(sportCode === 3 && age < 18)
        basketballUnder18++;

    if(sportCode === 4)
        other++;

    controlLoop = input.question("\nDo you want to continue (S/N)? ").toUpperCase();

    console.log("\n=======================================================================\n");

}

console.log("\n============================ Survey Result ============================\n")
console.log(`-> Total number of people who like soccer: ${soccerCount};`);
console.log(`-> Total number of people who like volleyball and are of legal age: ${volleyOver18};`);
console.log(`-> Total number of people who like basketball and are underage: ${basketballUnder18};`);
console.log(`-> Total number of people who like other sports: ${other}.`);
console.log("\n=======================================================================\n")