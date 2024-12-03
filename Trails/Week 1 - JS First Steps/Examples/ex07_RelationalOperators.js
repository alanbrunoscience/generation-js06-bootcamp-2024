// === Estritamente igual (compara tipo e valor)
// !== Estritamente diferente (compara tipo e valor)
/*
    1 == "1" // true

    1 === "1" // false
*/

let numString = "1";
let num = 1;

console.log("Comparação: ", numString == num);
console.log("Comparação Estritamente Igual: ", numString === num);