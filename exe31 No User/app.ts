// //No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

//Add an if test to Exercise 28 to make sure the list of users is not empty.
//---------------------------------------------------------------------------------

//solution.
//Add an if test to Exercise 28 to make sure the list of users is not empty.

let users_of_lab2:string[]=["Bina","Naina","Sara","Ayezal"]

for (const user of users_of_lab2){
    if (users_of_lab2.length==0){
console.log(" users are not allowed for lab2")
    }
    else if( user==="Sara"){
        console.log(`${user},you are a admin of this lab2`)
    }
    else{
        console.log(`${user},you are a visitor of this lab2`)
    }
}
//Author-"Huma Mohsin"
//Roll# 00268003
//date:- 27-02-2024
    