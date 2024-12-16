let numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("\n1) Printing by For...Of:\n")
for (let num of numbers) {
    console.log(num);
}

// Arrow Functions
console.log("\n2) Printing by Arrow Function:\n")
numbers.forEach(num => console.log(num));

console.log("\n3) Printing Squared Numbers:\n")
numbers.forEach(num => console.log(num * num));

console.log("\n4) Printing Only Even Numbers:\n")
numbers.forEach(num => {
    if(num % 2 === 0)
        console.log(num);
});