/* Collection Array

- A Collection Array é um objeto global que representa um array tradicional, ou seja, uma coleção de dados indexada, onde os elementos são armazenados em posições específicas (índices) e ordenados sequencialmente. Para acessar ou manipular um elemento em um array, utilizamos o índice correspondente, que representa sua posição dentro da estrutura.

- Um dos grandes benefícios da Collection Array é o controle total que ela oferece ao desenvolvedor. Por meio de diversos métodos nativos, é possível:

-> Adicionar, remover ou atualizar elementos;
-> Iterar sobre os dados de maneira eficiente;
-> Buscar elementos com base em critérios específicos.

*/

// Create an array, of type "number", called grades and initialize it
const grades: Array<number> = new Array<number>(7.0, 5.0, 4.0, 10.0);

// Display on the screen all the grades added. To display the grades, it'll be used the For...of loop
console.log("=== Recorded Grades ===\n");
for(let grade of grades) {
    console.log(grade.toFixed(2));
}

// Add a new grade - duplicated
grades.push(4.0) // Adds one or more elements to the END of the array and returns the new array length.

// Display the grades again, including the duplicated grade
console.log("\n=== Recorded Grades (Grade Value '4.0' Inserted At The End) ===\n");
for(let grade of grades) {
    console.log(grade.toFixed(2));
}

// Add some grades at the BEGINNING of the array
grades.unshift(2.5, 9.0);

// Display all the grades again
console.log("\n=== Recorded Grades (Grades Value '2.5' and '9.0' Inserted At The Beginning) ===\n");
for(let grade of grades) {
    console.log(grade.toFixed(2));
}

// Display the position (index) of a specific grade. If there are two identical grades, only the position of the first grade found will be shown
console.log(`\n-> The index of grade value '5.0' is ${grades.indexOf(5)}.`);

// Display whether a specific grade is in the array
console.log(`\n-> Is there a grade value '5.0' in the array? ${grades.includes(5)}.`);

// Display the grade entered at a specific position (index) in the array
console.log(`\n-> The grade of position 1 in the array is ${grades[1].toFixed(2)}.`);

// Change the grade value "5.0" to "6.0" and display if the change was made
grades[grades.indexOf(5)] = 6.0;

console.log(`\n-> The grade value '5.0' was changed to '6.0':\n`);
console.log("=== Recorded Grades Updated ===\n");
for(let grade of grades) {
    console.log(grade.toFixed(2));
}

// Delete the first reference of the grade value "4.00" in the array and show the changes made
grades.splice(grades.indexOf(4.0), 1); // splice(<index>, <how many elements will be removed or added from the given index>, <list of elements that will be inserted>)

console.log("\n-> Was the value of the 1st grade '4.00' deleted? \n");
console.log("=== Recorded Grades Updated ===\n");
for(let grade of grades) {
    console.log(grade.toFixed(2));
}

// Display the array length (number of elements inserted)
console.log(`\n-> The length of the current array is ${grades.length}.`);

// Clear the array and show that it is empty
grades.length = 0;

console.log(`\n-> The array is empty! So its current length is ${grades.length}.`);