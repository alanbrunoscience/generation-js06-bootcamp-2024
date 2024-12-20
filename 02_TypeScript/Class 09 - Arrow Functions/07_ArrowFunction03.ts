// Array of Numbers
let arrayNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Arrow function with more than one action in the function body
arrayNumbers.forEach(number => {
    if(number % 3 == 0)
        console.log(number)
});