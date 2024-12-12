import { Transport } from "./Transport";

export class Land extends Transport {

	private _numberOfWheels: number;
	private _speed: number;

	constructor(capacity: number, numberOfWheels: number, speed: number) {
		super(capacity);
		this._numberOfWheels = numberOfWheels;
		this._speed = speed;
	}

	public getNumberOfWheels() {
		return this._numberOfWheels;
	}

	public setNumberOfWheels(numberOfWheels: number) {
		this._numberOfWheels = numberOfWheels;
	}

	public getSpeed() {
		return this._speed;
	}

	public setSpeed(speed: number) {
		this._speed = speed;
	}

	public display(): void {
		super.display();
        console.log(`2) Number of Wheels: ${this.getNumberOfWheels()};`);
        console.log(`3) Speed: ${this.getSpeed().toFixed(2)} mph;`);
	}
}
