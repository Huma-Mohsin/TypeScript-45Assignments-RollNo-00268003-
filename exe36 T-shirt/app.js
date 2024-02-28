"use strict";
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
//The function should print a sentence summarizing the size of the shirt and the message printed on it
//SOLUTION
//Write a function called make_shirt() that accepts a size and the text of a message.
function make_shirt(size, text) {
    //The function should print a sentence summarizing the size of the shirt and the message printed on it
    console.log(`Dear client, your shirt having size "${size}" and "${text}" is printed on it and It is ready to dispatch.`);
}
//call a function as:-
make_shirt("M", "I am a developer & I love TYPESCRIPT");
