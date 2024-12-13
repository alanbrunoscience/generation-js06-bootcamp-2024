import { Athlete } from "./Athlete"

export class Cyclist extends Athlete {

    constructor(personName: string) {
        super(personName);
    }

    public pedal(): void {
        console.log("Cycling...")
    }

    // Implementing the abstract method from the 'Person' class
    public gotTired(): void {
        console.log("I'm tired of cycling!\n");
    }

}
