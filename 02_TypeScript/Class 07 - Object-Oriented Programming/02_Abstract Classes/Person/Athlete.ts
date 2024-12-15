import { Person } from "./Person";

export abstract class Athlete extends Person {

    constructor (personName: string) {
        super(personName);
    }

    public warmUp(): void {
        console.log("Warming up...")
    }

}
