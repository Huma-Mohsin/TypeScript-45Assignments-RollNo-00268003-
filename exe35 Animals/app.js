"use strict";
//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
//solution.
//Animals:three different animals that have a common characteristic. Store the names of these animals in a list, 
let common_characteristics_animals = ["Cats", "Dolphins", "Elephants"];
//use a for loop to print out the name of each animal. 
for (const animal of common_characteristics_animals) {
    console.log(animal);
    console.log("\n");
    //or
    //common_characteristics_animals.map((item)=>
    // console.log( `${item}`))
    //Modify your program to print a statement about each animal, such as A dog would make a great pet.
    if (animal == "cats") {
        console.log(`${animal} are known for forming strong bonds with their human caregivers.`);
        console.log("\n");
    }
    else if (animal == "Dolphins") {
        console.log(`${animal} are known for their complex cognitive abilities, problem-solving skills, and advanced communication`);
        console.log("\n");
    }
    else {
        console.log(`${animal} exhibit a range of emotions, including joy, grief, and empathy. They are known to mourn their dead, showing signs of distress and even revisiting the remains of deceased family members.`);
        console.log("\n");
    }
}
// Add a line at the end of your program stating what these animals have in common.
console.log("A common characteristic among dolphins, elephants, and cats is that they are all mammals.");
