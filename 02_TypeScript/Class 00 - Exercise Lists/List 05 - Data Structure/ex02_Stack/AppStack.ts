import { Stack } from "./Stack"; 
import readlineSync = require("readline-sync");

const stack = new Stack<string>();

let option: number;
let bookName, formattedName: string;

do {

    option = menu();

    switch(option) {
        case 1:

            addBooks();
            break;

        case 2:

            listAllBooks();
            break;

        case 3:

            removeBookFromStack();
            break;

        case 4:

            bookOnTop();
            break;

        case 5:

            searchBook();
            break;

        case 6:

            countBooks();
            break;

        case 7:

            clearStack();
            break;

        case 8:
            console.log("\nFinishing the program...");
            break;
        default:
            console.log("\n-> Invalid option! Choose an option between 1 and 7.");
    }

} while(option != 7);

// Functions Declaration
function menu(): number {

    console.log("\n********************************************************");
    console.log("\n                 Book Management System                 \n");
    console.log("********************************************************");
    console.log("\n 1 - Add new books to the stack;" +
        "\n 2 - List all books in the stack;" +
        "\n 3 - Remove a book from the stack;" +
        "\n 4 - View the book at the top of the stack;" +
        "\n 5 - Check if a specific book is in the stack;" +
        "\n 6 - Check the total number of books in the stack;" +
        "\n 7 - Remove all books from the stack at once;" +
        "\n 8 - Exit."
    );
    option = readlineSync.questionInt("\n-> Choose an option above: ", {limitMessage: "\n-> Invalid data type entered!"});
    console.log("\n********************************************************");

    return option;

}

function toTitleCase(bookName: string) {
    return bookName
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

function addBooks(): void {

    console.log("\nAdd New Books To The Stack:\n");
    bookName = readlineSync.question("-> Enter the name of the book to be added to the stack: ");

    formattedName = toTitleCase(bookName);

    stack.push(formattedName);

    console.log(`\n[ The book '${formattedName}' was successfully added to the stack! ]`);

}

function listAllBooks(): void {

    if(!stack.isEmpty()) {
        console.log("\nStack Of Books:\n");
        stack.printStack();
    } else {
        console.log("\n-> The stack is empty!");
    }

}

function removeBookFromStack(): void {

    if(!stack.isEmpty()) {
        console.log("\nRemoving The Following Book:\n");
        console.log(`- ${stack.pop()}.`);
    } else {
        console.log("\n-> The stack is empty!");
    }

}

function bookOnTop(): void {

    if(!stack.isEmpty()) {
        console.log("\nThe Book At The Top Of The Stack Is:\n");
        console.log(`- ${stack.peek()}.`);
    } else {
        console.log("\n-> The stack is empty!");
    }

}

function searchBook(): void {

    if(!stack.isEmpty()) {
        console.log("\nSearch For A Book In The Stack:\n");
        bookName = readlineSync.question("-> Enter the book name to be searched in the stack: ");

        formattedName = toTitleCase(bookName);

        if(stack.contains(formattedName)) {
            console.log(`\n[ The book '${formattedName}' is in the stack in the ${stack.indexOf(formattedName) + 1}º position. ]`);
        } else {
            console.log(`\n[ There is no book '${formattedName}' in the stack. ]`);
        }
    } else {
        console.log("\n-> The stack is empty!");
    }

}

function countBooks(): void {

    if(!stack.isEmpty()) {
        console.log("\nTotal Number of Books In The Stack:\n");
        console.log(`- ${stack.count()} book(s).`);
    } else {
        console.log("\n-> The stack is empty!");
    }

}

function clearStack(): void {

    if(!stack.isEmpty()) {
        console.log("\nRemoving All Books From the Stack...\n");
        stack.clear();
        console.log(`-> Total books in the stack: ${stack.count()} book(s).`);
    } else {
        console.log("\n-> The stack is empty!");
    }

}