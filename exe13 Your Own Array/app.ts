//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

//fav transport store in a variable.
let fav_modeof_transportation:string[]=["Audi","Mercedes","BMW","Bugatti"]

//print a series of statements about these items

fav_modeof_transportation.map((item)=>
    console.log( `I would like to own a ${item}`))//access items individually by means of using map.

//AUTHOR-"HUMA MOHSIN"
//DATE- 27-02-2024
//ROLL NO- 00268003