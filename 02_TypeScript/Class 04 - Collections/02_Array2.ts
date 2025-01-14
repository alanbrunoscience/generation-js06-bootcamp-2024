import readlinesync = require("readline-sync");

// Creating an empty array collection
const numbers: Array<number> = new Array<number>();

// Adding values in the Collection
numbers.push(7);
numbers.push(2);
numbers.push(5);
numbers.push(10);
numbers.push(7, 3); // Adding more than one value on the array but at the end

// Listing data that were added
for(let number of numbers) {
    console.log(number);
}

// Adding values from the user
numbers.push(readlinesync.questionFloat("\n-> Enter a number, please: "));

numbers.unshift(2, 4.5, 8, 9); // Adding more than one value on the array but at the beginning

console.log();
console.table(numbers);


// Searching for values ​​in the array
console.log("\n-> Is there the number 5 in the array? ", numbers.includes(5)); // Checking if there is a specific number in the collection

console.log("\n-> What is the index of number 3 in the array? ", numbers.indexOf(3)); // Checking what the index of an element is


// Deleting array elements
numbers.splice(numbers.indexOf(10), 1); // Deleting ONE NUMBER of the collection. If, instead, "numbers.splice(numbers.indexOf(10), 1)" were placed "numbers.splice(numbers.indexOf(10), 2)", the element would be deleted, and the next

console.log();
console.table(numbers);