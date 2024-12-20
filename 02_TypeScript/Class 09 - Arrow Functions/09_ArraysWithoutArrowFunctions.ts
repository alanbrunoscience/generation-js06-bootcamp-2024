let arrayNums: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Display items:\n");

// Display a list of items without arrow functions
for(let num of arrayNums) {
    console.log(num);
}

console.log("\nDisplay items added to themselves:\n");

// Display items added to themselves without Arrow Functions
for(let num of arrayNums) {
    console.log(num + num);
}

console.log("\nDisplay only the even items on the list:\n");

// Display only the even items on the list without Arrow Functions
for(let num of arrayNums) {
    if(num % 2 == 0)
        console.log(num)
}