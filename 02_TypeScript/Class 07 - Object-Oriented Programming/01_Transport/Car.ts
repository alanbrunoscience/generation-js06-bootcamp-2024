import { Land  } from "./Land";

export class Car extends Land {

	private _color: string;
	private _numberOfDoors: number;
	private _licensePlate: string;
	private _numberOfGears: number;
	
	constructor(capacity: number, numberOfWheels: number, speed: number, color: string, numberOfDoors: number, licensePlate: string, numberOfGears: number) {
		super(capacity, numberOfWheels, speed);
		this._color = color;
		this._numberOfDoors = numberOfDoors;
		this._licensePlate = licensePlate;
		this._numberOfGears = numberOfGears;
	}

	public getColor() {
		return this._color;
	}

	public setColor(color: string) {
		this._color = color;
	}

	public getNumberOfDoors() {
		return this._numberOfDoors;
	}

	public  setNumberOfDoors(numberOfDoors: number) {
		this._numberOfDoors = numberOfDoors;
	}

	public getLicensePlate() {
		return this._licensePlate;
	}

	public setLicensePlate(licensePlate: string) {
		this._licensePlate = licensePlate;
	}
	
	public getNumberOfGears() {
		return this._numberOfGears;
	}

	public setNumberOfGears(numberOfGears: number) {
		this._numberOfGears = numberOfGears;
	}

	public display(): void {
		super.display();
        console.log(`4) Color: ${this.getColor()};`);
        console.log(`5) Number of Doors: ${this.getNumberOfDoors()};`);
        console.log(`6) License Plate: ${this.getLicensePlate()};`);
        console.log(`7) Number of Gears: ${this.getNumberOfGears()}.`);
	}

}