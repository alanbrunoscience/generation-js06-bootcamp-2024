// Arrow Function with typed parameter
(n: number) => { console.log(n) }

// Arrow Function with untyped parameter

// Array of Numbers
let nums: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Since the Array is of type number, by inference Typescript defines that the number parameter will also be number
nums.forEach(number => console.log(number));