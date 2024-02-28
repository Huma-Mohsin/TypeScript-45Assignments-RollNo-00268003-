// //Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

//solution.
//Store three kinds of your favorite pizza in an array.
let fav_pizza:string[]=["Pepperoni Pizza:","Meat Feast Pizza","BBQ Chicken Pizza:"]
console.log("We have Pizzas in the MENU are:-")
    
//for loop to print the name of each pizza.
for(let i=0;i<fav_pizza.length;i++){
    
    console.log(fav_pizza[i])
}

//Modify your for loop to print a sentence using the name of the pizza.For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for(const iterator of fav_pizza)
console.log(`I like ${iterator} very much`);

// Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log("I like Malai Boti flavour in pizza because Malai Boti Pizza emerges as a true fusion masterpiece, celebrating the creamy richness of Malai Boti within the familiar embrace of a pizza. This unique culinary creation invites food enthusiasts to embark on a journey of flavors, where tradition and innovation coalesce to redefine the pizza experience. With its succulent marinated chicken, creamy textures, and vibrant garnishes, Malai Boti Pizza stands as a testament to the endless possibilities that arise when diverse culinary traditions come together in harmony.");

// Author-"Huma Mohsin"
// Roll# 0026800
//Date- 27-02-2024