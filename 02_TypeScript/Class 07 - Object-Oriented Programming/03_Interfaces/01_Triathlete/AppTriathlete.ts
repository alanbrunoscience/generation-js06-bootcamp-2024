import { Triathlete } from "./Triathlete";

export function main() {

    const triathlete: Triathlete = new Triathlete("Alan");

    triathlete.display();
    triathlete.warmUp();
    triathlete.pedal();
    triathlete.run();
    triathlete.swim();
    triathlete.gotTired();

}

main();