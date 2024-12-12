import { Transport } from "./Transport";
import { Land } from "./Land";
import { Car } from "./Car";

export function main() {

    const t1: Transport = new Transport(5);
    t1.display();

    const tr1: Land = new Land(5, 4, 100);
    tr1.display();

    const a1: Car = new Car(5, 4, 250, "Green", 5, "FLV-4566", 5);
    a1.display();
}

main();