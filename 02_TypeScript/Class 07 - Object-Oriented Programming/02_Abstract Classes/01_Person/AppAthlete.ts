import { Cyclist } from "./Cyclist";
import { Runner } from "./Runner";
import { Swimmer } from "./Swimmer";

export function main() {

    const cyclist = new Cyclist("Alan");
    cyclist.display();
    cyclist.warmUp();
    cyclist.pedal();
    cyclist.gotTired();

    const runner = new Runner("Usain Bolt");
    runner.display();
    runner.warmUp();
    runner.run();
    runner.gotTired();

    const swimmer = new Swimmer("Michel Phelps");
    swimmer.display();
    swimmer.warmUp();
    swimmer.swim();
    swimmer.gotTired();

}

main();