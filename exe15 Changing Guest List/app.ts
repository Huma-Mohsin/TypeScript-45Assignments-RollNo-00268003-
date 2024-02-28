// //Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.


//invited people list as:-
let invited_person:string[]=["zimmal","yumna","Aena","Kashaf","Faria"]

//part (a)===> //stating the name of the guest who can’t make it as:-
let unable_to_come:string="Kashaf"

//part(b)===> // new person you are inviting.
let new_guest:string="Hira"
//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
invited_person[invited_person.indexOf(unable_to_come)]=new_guest//Replace person 

//part(c)===> // Print a second set of invitation messages, one for each person who is still in your list.
invited_person.map((items)=>console.log(`Dear Friend ${items}, you are invited on Sunday's Dinner.`)
)

//AUTHOR-"HUMA MOHSIN"
//DATE- 27-02-2024
//ROLL NO- 00268003
