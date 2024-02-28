"use strict";
// //Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
//------------------------------------------------------------------------------------------------------------
//Solution:-
//Make a array of five or more usernames, including the name 'admin'. 
let user_names = ["user_1", "user_2", "user_3", "admin", "user_4"];
//print a greeting to each user after they log in to a website.
//1-If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
for (const user of user_names) {
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
}
