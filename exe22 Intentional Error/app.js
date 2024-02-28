"use strict";
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
//declaration of an array.
let days_in_week = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAAY", "FRIDAY", "SATURDAY", "SUNDAY"];
//Accessing an item of an array by its index.
console.log(days_in_week[5]); //as index 5 exists so it returns a value 
//but whhen i do below as:-
console.log(days_in_week[8]); //this statement produce an error because there is no 8th index exist in that particular array.
