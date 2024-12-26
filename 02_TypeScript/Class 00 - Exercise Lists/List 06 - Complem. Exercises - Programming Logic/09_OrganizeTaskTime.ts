import readlineSync from "readline-sync";

let remainingMins: number, taskTime01: number, taskTime02: number;

console.log("\n========== Tasks Time Organization ==========");
remainingMins = getValidMinutes("\n1) Enter the remaining minutes until the end of the working hours: ");
taskTime01 = getValidMinutes("\n2) Enter the manufacturing time of the first gift (in minutes): ");
taskTime02 = getValidMinutes("\n3) Enter the manufacturing time of the second gift (in minutes): ");

checkTaskCompletionTime(remainingMins, taskTime01, taskTime02);

function checkTaskCompletionTime(remainingMins: number, taskTime01: number, taskTime02: number): void {
    if(remainingMins < taskTime01 + taskTime02) {
        console.log(`\n-> The gifts will be made tomorrow!`);
    } else {
        console.log(`\n-> The gifts will still be made today!`);
    }
}

function getValidMinutes(prompt: string): number {
    let numberOfMinutes: number;
    do {
        numberOfMinutes = readlineSync.questionInt(prompt);
        
        if(numberOfMinutes < 0 || numberOfMinutes > 100) {
            console.log("\n-> The number of minutes must be greater than or equal to 0 and less than or equal to 100.");
        }
    
    } while(numberOfMinutes < 0 || numberOfMinutes > 100);

    return numberOfMinutes;

}