import readlinesync = require("readline-sync");
import { Queue } from "./Queue"

const queue = new Queue<string>();

queue.enqueue("Beatriz");
queue.enqueue("Gustavo");
queue.enqueue("Alana");
queue.enqueue(readlinesync.question("Enter your name: "));

console.log();
queue.printQueue();