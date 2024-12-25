import readlineSync = require("readline-sync");

const dddToCity: { [ddd: string]: string } = {
    "11": "São Paulo",
    "21": "Rio de Janeiro",
    "27": "Vitória",
    "31": "Belo Horizonte",
};

let ddd: number;

ddd = readlineSync.questionInt("Enter a DDD, please: ", {limitMessage: "\n-> Invalid data type entered!\n"});

searchCityByDDD(ddd.toString());

function searchCityByDDD(ddd: string): void {
    if (dddToCity[ddd])
        console.log(`\n-> DDD ${ddd} belongs to the city of ${dddToCity[ddd]}.`);
    else
        console.log("\n-> DDD not found!");
}