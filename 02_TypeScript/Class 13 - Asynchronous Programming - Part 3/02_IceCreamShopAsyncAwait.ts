// The object that defines the ice cream shop stock
let iceCreamComponents = {
    Fruits: ["strawberry", "grape", "banana", "apple"],
    Liquids: ["ice", "water"],
    Container: ["cone", "cup", "sundae glass"],
    Toppings: ["chocolate", "nuts", "sprinkles", "crushed peanut candy"],
};

// The variable that checks if the ice cream store is opened
let icsOpened = true;

// The function that defines the task execution time
async function time(timeMs: number) {
    return new Promise( (resolve, reject) => {
        if(icsOpened) {
            setTimeout(resolve, timeMs);
        } else {
            reject(console.log("Ice Cream Store closed!"));
        }
    });
}

// Ice cream shop function, which includes orders and production
async function iceCreamShop() {

    try {

        await time(2000);
        console.log(`The ${iceCreamComponents.Fruits[0]} fruit was selected.`);
    
        await time(0);
        console.log("Start ice cream production!");

        await time(2000);
        console.log("Cutting the fruits...");

        await time(1000);
        console.log(`Adding ${iceCreamComponents.Liquids[0]} and ${iceCreamComponents.Liquids[1]}...`);

        await time(1000);
        console.log("Turning on the machine...");

        await time(2000);
        console.log(`Insert the ice cream into the ${iceCreamComponents.Container[1]}...`);

        await time(3000);
        console.log(`Adding ${iceCreamComponents.Toppings[0]}...`);

        await time(2000);
        console.log(`Serving the ice cream.`);

    } catch (error) {
        console.log("The customer canceled the ice cream order!");
    }

}

iceCreamShop();