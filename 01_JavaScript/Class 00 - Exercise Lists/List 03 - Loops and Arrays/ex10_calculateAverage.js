/* Enunciado do Exercício

Elabore um algoritmo que leia as notas de uma turma com 10 participantes, dos 4 bimestres de um ano. As 4 notas de cada participante serão armazenadas em uma linha de uma matriz de números reais, logo cada linha da matriz representará as notas de um participante. Em um vetor de números reais, armazene as médias de cada participante e exiba as médias de cada um na tela.

*/

"use strict"

const input = require("readline-sync");

let studentsNumber;

do {
    studentsNumber = input.questionInt("Enter the total students' number: ");

    if(studentsNumber <= 0)
        console.log("\n-> Invalid number! The students' number must be greater than 0.\n");

} while(studentsNumber <= 0);

// Creating a bi-dimensional array to store all the students' grade
let grades = new Array(studentsNumber);

for(let i = 0; i < grades.length; i++) {
    grades[i] = Array(4);
}

// Creating an array to store the students' average
let arrayGradeAverages = new Array(studentsNumber);

// Filling up the values of the bi-dimensional array
console.log("\n======= SCHOOL GRADES SUBMISSION =======");
for(let i = 0; i < grades.length; i++) {
    let sumGrades = 0;
    console.log(`\n${i + 1}º Student:\n`);
    for(let j = 0; j < grades[i].length; j++) {
        do {
            grades[i][j] = input.questionFloat(`-> Enter the ${j + 1}º grade: `);

            if(grades[i][j] < 0.00 || grades[i][j] > 10.00)
                console.log("\n-> Invalid grade! The grade must be equal to or greater than 0.00 and less than or equal to 10.00.\n");

        }while(grades[i][j] < 0.00 || grades[i][j] > 10.00);
        
        sumGrades += grades[i][j];

    }

    arrayGradeAverages[i] = sumGrades / 4;

}

console.log();
console.table(grades);

// Student grade average printing
console.log("\n======= GRADE AVERAGE =======");
for(let i = 0; i < arrayGradeAverages.length; i++) {
    if(arrayGradeAverages[i] !== arrayGradeAverages[arrayGradeAverages.length - 1])
        console.log(`\n-> ${i + 1}º Student: ${arrayGradeAverages[i].toFixed(2)};`);
    else
        console.log(`\n-> ${i + 1}º Student: ${arrayGradeAverages[i].toFixed(2)}.`);
}