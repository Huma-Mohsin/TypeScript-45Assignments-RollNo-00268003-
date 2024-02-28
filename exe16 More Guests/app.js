"use strict";
// //More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
//========================================================
//lets think of three more guests are:-(Sadia,Waniya,Ayesha)
//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
let invited_person = ["zimmal", "yumna", "Aena", "Kashaf", "Faria"];
invited_person.map((item) => console.log(`Dear ${item},you are invited for tomorrow's dinner and i found a bigger dinner table.`));
// Add one new guest to the beginning of your array.
let begining_guest = "Haizal";
invited_person.unshift(begining_guest); //unshift is used to add something in an array at first index i.e 0 index.
console.log(invited_person);
//Add one new guest to the middle of your array. 
let middle_guest = "Liza";
// Adding a new guest to the middle (at index 1)
invited_person.splice(3, 0, middle_guest); //set liza at index3 , here 0 means not allowed to remove or splice
console.log(invited_person);
//add one new guest to the end of your list.
let end_guest = "Samina";
invited_person.push(end_guest);
console.log(invited_person);
// Print a new set of invitation messages, one for each person in your list.
invited_person.map((item) => console.log(`Dear ${item},YOU ALL ARE INVITED FOR TOMORROW'S DINNER AT RANGOLI`));
