export abstract class Person {

    private _personName: string;

    // Personalized Methods
    public abstract gotTired(): void;

    public toTitleCase(personName: string) {
        return personName
            .toLowerCase()
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }

    public display(): void {
        console.log("\n*******************************************");
        console.log("                Person Data                ");
        console.log("*******************************************");
        console.log(`\nPerson's name: ${this.toTitleCase(this.getPersonName())}`);
    }
    
    // Special Methods
    constructor(personName: string) {
        this._personName = personName;
    }

    public getPersonName(): string {
        return this._personName;
    }

    public setPersonName(personName: string): void {
        this._personName = personName;
    }

}