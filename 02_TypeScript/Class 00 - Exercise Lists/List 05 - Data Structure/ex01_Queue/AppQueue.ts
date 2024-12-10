import { Queue } from "./Queue";
import readlineSync = require("readline-sync");

const queue = new Queue<string>();

let option: number;
let clientName, formattedName: string;

do {

    option = menu();

    switch(option) {
        case 1:

            console.log("\nAdd New Client on Queue:\n");
            clientName = readlineSync.question("-> Enter the client name to be added to the queue: ");

            formattedName = toTitleCase(clientName);

            queue.enqueue(formattedName);

            console.log(`\n['${formattedName}' was registered successfully on the queue!]`);

            break;

        case 2:

            if(!queue.isEmpty()) {
                console.log("\nWaiting Queue:\n");
                queue.printQueue();
            } else {
                console.log("\n-> The queue is empty!");
            }
            
            break;

        case 3:

            if(!queue.isEmpty()) {
                console.log("\nClient Being Served:\n");
                console.log(`- ${queue.dequeue()}.`);
            } else {
                console.log("\n-> The queue is empty!");
            }
                
            break;

        case 4:

            if(!queue.isEmpty()) {
                console.log("\nThe Next Client To Be Called Is:\n");
                console.log(`- ${queue.peek()}.`);
            } else {
                console.log("\n-> The queue is empty!");
            }

            break;

        case 5:

            
            console.log("\nSearch for a client on the queue:\n");
            clientName = readlineSync.question("-> Enter the client name to be searched on the queue: ");

            formattedName = toTitleCase(clientName);

            queue.contains(formattedName);

            console.log(`\n[The '${formattedName}' is still in waiting queue at the ${queue.indexOf(formattedName) + 1}º position]`);

            break;

        case 6:
            break;
        case 7:
            console.log("\nFinishing the program...");
            break;
        default:
            console.log("\n-> Invalid option! Choose an option between 1 and 7.\n");
    }

} while(option != 7);

function menu(): number {

    console.log("\n********************************************************");
    console.log("\n                   Waiting Queue Menu                   \n");
    console.log("********************************************************");
    console.log("\n 1 - Add new client on queue;" + 
        "\n 2 - List all clients;" +
        "\n 3 - Call next client;" +
        "\n 4 - View the next client to be called;" +
        "\n 5 - Check if a specific client is in the waiting queue;" +
        "\n 6 - Check the total clients on the waiting list;" +
        "\n 7 - Exit."
    );
    option = readlineSync.questionInt("\n-> Choose an option above: ", {limitMessage: "\n-> Invalid data type entered!"});
    console.log("\n********************************************************");

    return option;

}

// Helper function to convert strings to Title Case
function toTitleCase(clientName: string) {
    return clientName
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}