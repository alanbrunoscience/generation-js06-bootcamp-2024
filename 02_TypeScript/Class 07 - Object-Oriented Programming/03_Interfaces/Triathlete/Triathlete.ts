import { Person } from "./Person";
import { Cyclist } from "./Cyclist";
import { Runner } from "./Runner";
import { Swimmer } from "./Swimmer";

export class Triathlete extends Person implements Cyclist, Runner, Swimmer {

    constructor(athleteName: string) {
        super(athleteName);
    }

    public warmUp(): void {
        console.log(`\n${this.getPersonName()} is warming up...`);
    }

    public run(): void {
        console.log(`${this.getPersonName()} is running...`);
    }
    
    public pedal(): void {
        console.log(`${this.getPersonName()} is cycling...`);
    }

    public swim(): void {
        console.log(`${this.getPersonName()} is swimming...`);
    }

    public gotTired(): void {
        console.log(`${this.getPersonName()} is tired!`);
    }

}