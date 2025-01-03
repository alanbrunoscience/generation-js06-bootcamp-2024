export class Transport {

	private _capacity: number;

	constructor(capacity: number) {
		this._capacity = capacity;
	}

	public getCapacity() {
		return this._capacity;
	}

	public setCapacity(capacity: number) {
		this._capacity = capacity;
	}
	
	public display(): void {
        console.log("\n\n******************************************");
        console.log("          Means of Transport Data          ");
        console.log("******************************************");
        console.log(`\n1) Capacity (Number of passengers): ${this.getCapacity()};`);
    }
	
}