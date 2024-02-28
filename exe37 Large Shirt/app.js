"use strict";
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
//SOLUTION
// //Task: Large Shirts
// Modify the make_shirt() function.
// Shirts should be large by default.
// Default message: "I love TypeScript."
// Create a large shirt and a medium shirt with the default message.
// Create a shirt of any size with a different message.
//making a fuction with some default parameters.
//Modify the make_shirt() function.
// Shirts should be large by default.
// Default message: "I love TypeScript."
function make_shirt(size = "L", message = "I Love TypeScript") {
    console.log(`creating a shirt with" ${size} "size and "${message}" print on it`);
}
// Create a large shirt and a medium shirt with the default message.or calling a function.
make_shirt(); //creating a large shirt with default message.
make_shirt("M"); //creating a medium shirt with default message.
//// Create a shirt of any size with a different message.
make_shirt("S", "I am a future developer");
