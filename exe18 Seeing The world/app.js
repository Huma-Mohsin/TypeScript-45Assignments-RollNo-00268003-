"use strict";
// // //Seeing the World: Think of at least five places in the world you’d like to visit.
// // • Store the locations in a array. Make sure the array is not in alphabetical order.
// // • Print your array in its original order.
// // • Print your array in alphabetical order without modifying the actual list.
// // • Show that your array is still in its original order by printing it.
// // • Print your array in reverse alphabetical order without changing the order of the original list.
// // • Show that your array is still in its original order by printing it again.
// // • Reverse the order of your list. Print the array to show that its order has changed.
// // • Reverse the order of your list again. Print the list to show it’s back to its original order.
// // • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// // -------------------------------------------------------------------------------------------------------------------------
// Think of at least five places in the world you’d like to visit as:- TURKEY, DUBAI, GERMANY, AUSTRALIA, SWITZERLAND.
//Store the locations in a array. Make sure the array is not in alphabetical order AS:-
let fav_places = ["turkey", "Dubai", "Germany", "australia", "switzerland"];
//Print your array in its original order.
console.log("original_array:", fav_places);
//Print your array in alphabetical order without modifying the actual list.
const sensitive_sorting = [...fav_places].sort(); //The code snippet [...fav_places].sort(); creates a shallow copy of the array fav_places using the spread operator (...) and then sorts the copied array in alphabetical order using the sort method.
//Here's a breakdown of the code:
//[...fav_places]: This creates a new array containing all the elements of the fav_places array. It's a way of creating a shallow copy of the array, ensuring that the original array remains unchanged.
//.sort(): This method sorts the elements of the copied array in place. By default, the elements are sorted as strings, which means they are sorted in alphabetical order.
console.log("sensitive_sorting", sensitive_sorting); // this shows case sensitive sorting.
//for case insensitive sorting:-
const insensitive_sorting = [...fav_places].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
console.log("insensitive_sorting", insensitive_sorting); ///this shows insensitive sorting.
// Show that your array is still in its original order by printing it.
console.log("Array is still in its original order:", fav_places);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse sensitive alphabetical order:", [...fav_places].sort().reverse()); //it reverse sensitive alphabetical order.
console.log("Reverse insensitive alphabetical order:", [...fav_places].sort((a, b) => b.localeCompare(a, undefined, { sensitivity: 'base' })));
// Show that your array is still in its original order by printing it again.
console.log("array is still in its original order :", fav_places);
//Reverse the order of your list. Print the array to show that its order has changed.
const reverse_fav_places = [...fav_places].reverse();
console.log("Reverse the order of Original array:", reverse_fav_places);
//Reverse the order of your list again. Print the list to show it’s back to its original order.
const back_to_reverse = reverse_fav_places.reverse();
console.log("reverse array again convert to original arrray:", back_to_reverse); //reverse array again convert to original arrray.
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sort array so it’s stored in alphabetical order:", [...fav_places].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" })));
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("change your array so it’s stored in reverse alphabetical order:", [...fav_places].sort((a, b) => b.localeCompare(a)));
