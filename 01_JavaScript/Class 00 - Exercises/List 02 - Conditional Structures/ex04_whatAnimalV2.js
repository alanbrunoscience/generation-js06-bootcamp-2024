/* Enunciado do Exercício

Escreva um algoritmo que leia 3 palavras (string), que definem as características de um tipo de animal, segundo o diagrama abaixo, que deve ser lido da esquerda para a direita. 

*/

"use strict"

const input = require("readline-sync");

let charac1 = input.question("1) Enter the first characteristic ('vertebrate' or 'invertebrate'): ").toLowerCase();

if(charac1 !== "vertebrate" && charac1 !== "invertebrate") {
    console.log("\n-> Invalid input! It must be 'vertebrate' or 'invertebrate'.");
    process.exit(0);
}

let charac2 = input.question("2) Enter the second characteristic ('bird', 'mammal', 'insect', or 'annelid'): ").toLowerCase();

if(charac2 !== "bird" && charac2 !== "mammal" && charac2 !== "insect" && charac2 !== "annelid") {
    console.log("\n-> Invalid input! It must be 'bird', 'mammal', 'insect', or 'annelid'.");
    process.exit(0);
}

let charac3 = input.question("3) Enter the third characteristic ('carnivore', 'omnivorous', 'herbivore', or 'hematophagous'): ").toLowerCase();

if(charac3 !== "carnivore" && charac3 !== "omnivorous" && charac3 !== "herbivore" && charac3 !== "hematophagous") {
    console.log("\n-> Invalid input! It must be 'carnivore', 'omnivorous', 'herbivore', or 'hematophagous'.");
    process.exit(0);
}

let isFound = false;

if(charac1 === "vertebrate") {
    if(charac2 === "bird") {
        if(charac3 === "carnivore") {
            console.log("\nThe animal is an eagle.");
            isFound = true;
        } else if(charac3 === "omnivorous") {
            console.log("\nThe animal is a dove.");
            isFound = true;
        }
    } else if(charac2 === "mammal") {
        if(charac3 === "omnivorous") {
            console.log("\nThe animal is a man.");
            isFound = true;
        } else if(charac3 === "herbivore") {
            console.log("\nThe animal is a cow.");
            isFound = true;
        }
    }
} else {
    if(charac2 === "insect") {
        if(charac3 === "hematophagous") {
            console.log("\nThe animal is a flea.");
            isFound = true;
        } else if(charac3 === "herbivore") {
            console.log("\nThe animal is a caterpillar.");
            isFound = true;
        }
    } else if(charac2 === "annelid") {
        if(charac3 === "hematophagous") {
            console.log("\nThe animal is a leech.");
            isFound = true;
        } else if(charac3 === "omnivorous") {
            console.log("\nThe animal is a worm.");
            isFound = true;
        }
    }
}

if(!isFound) {
    console.log("\nAnimal not found!");
}