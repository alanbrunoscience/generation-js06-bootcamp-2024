let listNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Display items:\n");

// Display a list of items without arrow functions
listNumbers.forEach(num => {console.log(num)});

console.log("\nDisplay items added to themselves:\n");

// Display items added to themselves without Arrow Functions
listNumbers.forEach(num => {console.log(num + num)});

console.log("\nDisplay only the even items on the list:\n");

// Display only the even items on the list without Arrow Functions
listNumbers.forEach(num => {
    if(num % 2 == 0)
        console.log(num)
});