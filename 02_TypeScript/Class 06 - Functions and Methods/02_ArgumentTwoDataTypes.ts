/* Functions with return type void and arguments with 2 data types

- Obs.: PIPE ( | ) in TypeScript is used to create a special data type called Union Type. A union type is a type formed by two or more other different data types, representing values ​​that can be of any of these types.

*/

productType(40);
productType('M');

// Function Declaration
function productType(size: number | string): void {
    if (typeof(size) === "number")
        console.log("\n-> The size is a number.");
    else
        console.log("\n-> The size is a string.");
}

/* Narrowing

- To check whether the type of data sent to the function is number or string, we use the typeof function. This type checking is called Type Narrowing.

- Narrowing refers to the process of reducing the type of a variable from a broader type to a more specific type within a given block of code or context. This is usually done through conditional statements or Type Guards, which help the TypeScript compiler understand more precisely what the type of a variable is at a given point in the code.

===============================================================================================================

What are Type Guards?

- Type Guards are a TypeScript technique used to obtain information about the type of a variable, usually within a conditional block. Type Guards are regular functions that return a boolean value, taking a type and telling TypeScript whether it can be reduced to something more specific. Type Guards have the unique property of ensuring that the tested value is of a defined type depending on the boolean returned. The typeof and instanceof commands are examples of Type Guards.

*/