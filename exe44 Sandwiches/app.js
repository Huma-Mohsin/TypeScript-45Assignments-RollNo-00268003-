"use strict";
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function order_Sandwich(sandwich) {
    if (sandwich.items.length === 0) {
        console.log("You have ordered Nothing.");
    }
    else {
        console.log("Kindly Verify your order once again...");
        console.log("Bread:", sandwich.bread);
        console.log("Items:", sandwich.items);
        console.log("condiments:", sandwich.condiments);
        console.log("Final order", sandwich.bread, sandwich.condiments, sandwich.items);
    }
}
order_Sandwich({
    bread: "Whole Wheat",
    items: ["Ham", "Cheese", "Lettuce"],
    condiments: ["Mayo", "Mustard"]
});
order_Sandwich({
    bread: "White",
    items: ["Turkey", "Swiss"]
});
order_Sandwich({
    bread: "Multigrain",
    items: []
});
