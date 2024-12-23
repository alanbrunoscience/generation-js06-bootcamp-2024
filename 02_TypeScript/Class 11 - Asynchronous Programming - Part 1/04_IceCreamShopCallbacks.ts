// The object that defines the ice cream shop stock
let stock = {
    Fruits: ["strawberry", "grape", "banana", "apple"],
    Liquids: ["ice", "water"],
    Container: ["cone", "cup", "sundae glass"],
    Toppings: ["chocolate", "nuts", "sprinkles", "crushed peanut candy"],
};

// Receive Order Function
let order = (fruit: number, run_production: any) => {

    // Message
    console.log("An order has arrived!");

    // Time Function
    setTimeout(function() {
        
        console.log(`The ${stock.Fruits[0]} fruit was selected.`);
        
        // Callback Function Call
        run_production();

    }, 2000);
};

// Start Production Function
let production = () => {

    setTimeout(() => {
        // Message
        console.log("Start ice cream production!");

        setTimeout(() => {
            // Cut the fruits
            console.log("Cutting the fruits...");

            setTimeout(() => {
                // Add Ice and Water
                console.log(`Adding ${stock.Liquids[0]} and ${stock.Liquids[1]}...`);
                setTimeout(() => {
                    // Turn on the machine
                    console.log("Turning on the machine...");
                    setTimeout(() => {
                        // Select the container (cone, cup, or sundae glass)
                        console.log(`Insert the ice cream into the ${stock.Container[1]}...`);
                        setTimeout(() => {
                            // Select the toppings
                            console.log(`Adding ${stock.Toppings[0]}...`);
                            setTimeout(() => {
                                // Serve the ice cream
                                console.log("Serving the ice cream.");
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000);
    }, 0);
};

/*
* Calling the receive order function, passing the Production function and fruit as an argument
*/
order(0, production);

/*

- Percebeu o quanto este código é extenso e confuso? São 7 Funções Callback aninhadas, uma dentro da outra!

- O Código acima é popularmente conhecido entre as pessoas desenvolvedoras TypeScript/JavaScript de Callback Hell! ou O Inferno das Callbacks! Qual é a Solução? A resposta para esta pergunta é: Promises!

*/