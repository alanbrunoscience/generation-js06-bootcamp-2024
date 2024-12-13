import { Athlete } from "./Athlete";

export class Swimmer extends Athlete {

    constructor(personName: string) {
        super(personName);
    }

    public swim(): void {
        console.log("Swimming...");
    }

    public gotTired(): void {
        console.log("I'm tired of swimming!\n");
    }

}
