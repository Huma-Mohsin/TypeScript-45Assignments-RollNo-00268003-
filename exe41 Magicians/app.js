"use strict";
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
//solution
//Make a array of magician’s namesand then //Pass the array to a function called show_magicians().
function magician_name(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
//calling a function.
const magician_array = ["David Copperfield", "Harry Houdini", "Criss Angel", "Doug Henning", "Dynamo"];
magician_name(magician_array);
