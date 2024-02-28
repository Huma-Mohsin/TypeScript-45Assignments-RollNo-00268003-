// //Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

//solution.

// Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
let my_fav_fruit:string[]=["Bananas","Apples","Peaches","Mangoes","pineapples"]
// for check certain items in an array ,we use .includes()
if (my_fav_fruit.includes("Mangoes")){
    console.log("yes,your favourite fruit is here.")
}
if(my_fav_fruit.includes("Strawberry")){
    console.log("Sorry,It is not in the list of favourite fruit.")
}
if (my_fav_fruit.includes("Bananas")){
    console.log("yes,your favourite fruit is here.")
}

//Make a array of your three favorite fruits and call it favorite_fruits.
let favourite_fruit:string[]=["POMEGRANATE","CHERRY","LITCHI"]
console.log(favourite_fruit);//print list

//Author- Huma Mohsin
//Date: 26-02-24
//Roll# 00268003