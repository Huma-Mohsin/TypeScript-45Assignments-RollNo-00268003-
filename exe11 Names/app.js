"use strict";
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
//Array is a container which holds any type of data , values in an array store at a particular index.
//Store the names of a few of your friends in a array called names.
let names = ["Huma", "Mohsin", "Muhammad", "Izhaan"];
for (let name of names) {
    console.log(name);
}
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
