//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

//solution:-

//declare a show_magician function.
function show_magician(Magicians:string[]){
    for(const magician of Magicians){
        console.log(magician)
    }
}

//declare a THE GREAT function.
function the_great(Magicians:string[]){

     // Create a new array with "the Great" added to each magician's name
     const great_magicians:string[]=Magicians.map((Magician=>`The Great ${Magician}`))
     return great_magicians;
}

// Original array of magicians
const normal_magicians: string[] = ["Merlin", "Houdini", "David Copperfield"];

//copy of original array with the great phrase.
const great_magicians:string[]=the_great([...normal_magicians])


//print and call original array.
console.log("Original Array:")
show_magician(normal_magicians)


//print and call copy of original array.
console.log("\n Copy of Original Array:")
show_magician(great_magicians)

//Author: "Huam Mohsin"
//Roll NO. 00268003
//Date- 27-02-2024