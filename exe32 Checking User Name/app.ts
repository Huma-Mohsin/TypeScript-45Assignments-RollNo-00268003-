// //Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
//-----------------------------------------------------------------------------------------------------

//Make a list of five or more usernames called current_users.
let current_users:string[]=["Huma","sara","Zara","Ali","Zain","warisha"]

//Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users:string[]=["Sara","Uzair","Bina","zara","Waniya","Alishba"]

//Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//comparison is case insensitive.
 
// Case-insensitive comparison and checking availability
for (const newUser of new_users) {
    const isUsernameTaken = current_users.some((user) => user.toLowerCase() === newUser.toLowerCase());

    if (isUsernameTaken) {
        console.log(`Sorry, the username '${newUser}' is already taken. Please enter a new username.`);
        console.log("the person will need to enter a new username. ")
    } else {
        console.log(`The username '${newUser}' is available.`);
    }
}
// //In this TypeScript example:

// current_users represents the existing usernames.
// new-users represents the usernames to be checked.
// The some function is used to check if any existing username matches the new username (case-insensitive).
// It prints a message indicating whether the username is already taken or available.

//Author:-"Huma Mohsin
//Roll# 00268003
//Date:27-02-2024"