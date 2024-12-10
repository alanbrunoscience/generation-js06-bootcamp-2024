import { Queue } from "./Queue";
import readlineSync = require("readline-sync");

const queue = new Queue<string>();

let option: number;
let customerName, formattedName: string;

do {

    option = menu();

    switch(option) {
        case 1:

            addCustomerQueue();
            break;

        case 2:

            listCustomersQueue();
            break;

        case 3:

            callNextCustomer();
            break;

        case 4:

            nextCustomer();
            break;

        case 5:

            searchCustomer();
            break;

        case 6:

            countCustomers();
            break;

        case 7:

            clearQueue();
            break;

        case 8:
            console.log("\nFinishing the program...");
            break;
        default:
            console.log("\n-> Invalid option! Choose an option between 1 and 7.");
    }

} while(option != 8);


// Functions Declaration
function menu(): number {

    console.log("\n********************************************************");
    console.log("\n                   Waiting Queue Menu                   \n");
    console.log("********************************************************");
    console.log("\n 1 - Add new customer to the queue;" +
        "\n 2 - List all customers still waiting in the queue;" +
        "\n 3 - Call next customer;" +
        "\n 4 - View the next customer to be called;" +
        "\n 5 - Check if a specific customer is in the waiting queue;" +
        "\n 6 - Check the total customers in the waiting queue;" +
        "\n 7 - Remove all customers from the queue at once;" +
        "\n 8 - Exit."
    );
    option = readlineSync.questionInt("\n-> Choose an option above: ", {limitMessage: "\n-> Invalid data type entered!"});
    console.log("\n********************************************************");

    return option;

}

function toTitleCase(customerName: string) {
    return customerName
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

function addCustomerQueue(): void {

    console.log("\nAdd New Customer To The Queue:\n");
    customerName = readlineSync.question("-> Enter the Customer name to be added to the queue: ");

    formattedName = toTitleCase(customerName);

    queue.enqueue(formattedName);

    console.log(`\n[ '${formattedName}' was successfully added to the queue! ]`);

}

function listCustomersQueue(): void {

    if(!queue.isEmpty()) {
        console.log("\nWaiting Queue:\n");
        queue.printQueue();
    } else {
        console.log("\n-> The queue is empty!");
    }

}

function callNextCustomer(): void {

    if(!queue.isEmpty()) {
        console.log("\nCustomer Being Served:\n");
        console.log(`- ${queue.dequeue()}.`);
    } else {
        console.log("\n-> The queue is empty!");
    }

}

function nextCustomer(): void {

    if(!queue.isEmpty()) {
        console.log("\nThe Next Customer To Be Called Is:\n");
        console.log(`- ${queue.peek()}.`);
    } else {
        console.log("\n-> The queue is empty!");
    }

}

function searchCustomer(): void {

    if(!queue.isEmpty()) {
        console.log("\nSearch For A Customer In The Queue:\n");
        customerName = readlineSync.question("-> Enter the customer name to be searched in the queue: ");

        formattedName = toTitleCase(customerName);

        if(queue.contains(formattedName)) {
            console.log(`\n[ '${formattedName}' is still waiting in the queue in the ${queue.indexOf(formattedName) + 1}º position. ]`);
        } else {
            console.log(`\n[ There is no '${formattedName}' waiting in the queue. ]`);
        }
    } else {
        console.log("\n-> The queue is empty!");
    }

}

function countCustomers(): void {

    if(!queue.isEmpty()) {
        console.log("\nTotal Number of Customers Still In The Waiting Queue:\n");
        console.log(`- ${queue.count()} Customer(s).`);
    } else {
        console.log("\n-> The queue is empty!");
    }

}

function clearQueue(): void {

    if(!queue.isEmpty()) {
        console.log("\nRemoving All Customers From the Queue...\n");
        queue.clear();
        console.log(`-> Total customers in the queue: ${queue.count()} customer(s).`);
    } else {
        console.log("\n-> The queue is empty!");
    }

}