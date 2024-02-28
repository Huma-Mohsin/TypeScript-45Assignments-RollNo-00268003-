"use strict";
// • Test whether an item is in a array
let rainbow_array = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
console.log("Items of an array contain as below");
for (let i = 0; i < rainbow_array.length; i++) {
    console.log(rainbow_array[i]);
}
//// • Test whether an item is not in a array
if (rainbow_array.includes("violet")) {
    console.log("The particular item is in the array.");
}
else {
    console.log("The particular item is not in the array.");
}
