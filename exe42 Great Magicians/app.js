"use strict";
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
//solution.
//Write a function called make_great() that modifies the array of magician.
function make_great(magicians) {
    for (const magician of magicians) {
        // that modifies the array of magicians by adding the phrase the Great to each magician’s name
        console.log(`${magician}, The Great.`);
    }
}
//Call show_magicians() to see that the list has actually been modified.
const show_magicians__names = ["Shin Lim", "Penn and Teller", "Derren Brown", "Lance Burton", "Siegfried & Roy"];
make_great(show_magicians__names);
