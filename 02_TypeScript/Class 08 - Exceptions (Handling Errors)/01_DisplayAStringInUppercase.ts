// Example 01 - Display a string in Uppercase Letters

const formattedString = convert(123); // If you try to convert data that is not a type of string an error will happen and the program will be finished (TypeError)

console.log(formattedString);

export function convert(content: any): string {
    return content.toUpperCase();
}

