//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

//solution.

//declaring an object of a sandwich.

interface Sandwiches{//In TypeScript, the interface keyword is used to declare a new type. It allows you to define a contract or a shape for an object, specifying what properties and methods that object should have. This helps in enforcing a certain structure in your code, making it more predictable and maintainable.
    bread:string;
    items:string[];
    condiments?:string[]
} //Here,we define a structure of a sandwich.

function order_Sandwich(sandwich:Sandwiches){
    if(sandwich.items.length===0){
        console.log("You have ordered Nothing.")
    }
    else{
        console.log("Kindly Verify your order once again...")
        console.log("Bread:",sandwich.bread)
        console.log("Items:",sandwich.items)
        console.log("condiments:",sandwich.condiments)
        console.log("Final order" ,sandwich.bread,sandwich.condiments,sandwich.items)
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

//Author:- "Huma Mohsin"
//RollNo. 00268003
//Date-28-02-2024

