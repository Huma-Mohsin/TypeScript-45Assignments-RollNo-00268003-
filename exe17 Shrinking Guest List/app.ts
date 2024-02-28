// //Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

//initialize a guestlist.
 let guest_list:string[]=["Ayesha","Omer","Zainab","Kashan","Isra","Sania"]
 //informing people about shortage of space and therfore 2 people are invited.
 console.log("Due to shortage of dinner table,I invite only 2 people at dinner")

 //Remove guests from your list one at a time until only two names remain in your list. 
 while(guest_list.length>2){
 
 
 //Each time you pop a name from your list.
 const removed_guest=guest_list.pop()//removes guest from array, started to remove from the end and reaches until 2 person it stops to pop.

 //print a message to that person letting them know you’re sorry you can’t invite them to dinner.
 console.log(` I am feeling very bad to inform you dear ${removed_guest} that you are not longer invited for the dinner `)

}


//Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log(guest_list);//for veriffying remaining guest in an array.
guest_list.map((item)=>console.log(`Dear ${item}, you are still invited for dinner`))


//Remove the last two names from your list, so you have an empty list
guest_list.splice(0,guest_list.length);


//Print your list to make sure you actually have an empty list at the end of your program.
console.log(guest_list)

//AUTHOR-"HUMA MOHSIN"
//DATE- 27-02-2024
//ROLL NO- 00268003
