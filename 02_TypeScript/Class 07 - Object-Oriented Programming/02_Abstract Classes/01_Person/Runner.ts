import { Athlete } from "./Athlete";

export class Runner extends Athlete {

    constructor(personName: string) {
        super(personName);
    }

    public run(): void {
        console.log("Running...");
    }

    public gotTired(): void {
        console.log("I'm tired of running!\n");
    }

}
