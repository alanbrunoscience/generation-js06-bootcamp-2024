// The object that defines the ice cream shop stock
let stockIceCream = {
    Fruits: ["strawberry", "grape", "banana", "apple"],
    Liquids: ["ice", "water"],
    Container: ["cone", "cup", "sundae glass"],
    Toppings: ["chocolate", "nuts", "sprinkles", "crushed peanut candy"],
};

// The variable that checks if the ice cream store is opened
let isOpened = true;

// Receive Order Function
let iceCreamOrder = (time: number, task: any) => {

    return new Promise(( resolve, reject ) => {

        if(isOpened) {

            // Define the task and time
            setTimeout(() => {
    
                // Solve the Production Task
                resolve(task());

            }, time);
        
        } else {
    
            // Promise rejected
            reject(console.log("Ice Cream Store closed!"));
    
        }

    }); // resolve - Ice cream delivered / reject - Customer upset because there was no ice cream
   
}

// Call the iceCreamOrder() function passing the time and the task
iceCreamOrder(2000, () => console.log(`The ${stockIceCream.Fruits[0]} fruit was selected.`))

    // Task 2
    .then(() => {
        return iceCreamOrder(0, () => console.log("Start ice cream production!"));
    })

    // Task 3
    .then(() => {
        return iceCreamOrder(2000, () => console.log("Cutting the fruits..."));
    })

    // Task 4
    .then(() => {
        return iceCreamOrder(1000, () => console.log(`Adding ${stockIceCream.Liquids[0]} and ${stockIceCream.Liquids[1]}...`));
    })

    // Task 5
    .then(() => {
        return iceCreamOrder(1000, () => console.log("Turning on the machine..."));
    })

    // Task 6
    .then(() => {
        return iceCreamOrder(2000, () => console.log(`Insert the ice cream into the ${stockIceCream.Container[1]}...`));
    })

    // Task 7
    .then(() => {
        return iceCreamOrder(3000, () => console.log(`Adding ${stockIceCream.Toppings[0]}...`));
    })

    // Task 8
    .then(() => {
        return iceCreamOrder(2000, () => console.log(`Serving the ice cream.`));
    })

    .catch(() => {
        console.log("The customer canceled the ice cream order!");
    })

    .finally(() => {
        console.log("Day Ended!");
    })


/* then() Method

The then() method returns a new Promise when the original promise is resolved. This implementation is called Promise Chaining.

- The first task is our original promise;

- The remaining tasks return a new promise whenever the previous task completes.

*/