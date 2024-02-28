"use strict";
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let mountains = ["K2", "Mount Everest", "Kangchenjunga", "Elbrus", "Denali", "Makalu", "Lhotse"]; //declared mountain's list.
//print list.
console.log(`Here, I gathered some list1 of Mountains i.e ${mountains}`);
//or accessing items....of an array.
for (const items of mountains) {
    console.log(`Here, I gathered some list2 of Mountains i.e ${items}`);
}
//or
for (let i = 0; i < mountains.length; i++) {
    console.log(`Here, I gathered some list3 of Mountains i.e ${mountains[i]}`);
}
//or
mountains.map((item) => console.log(`Here, I gathered some list4 of Mountains i.e ${item}`));
//Author
console.log("Done by Huma-Mohsin");
