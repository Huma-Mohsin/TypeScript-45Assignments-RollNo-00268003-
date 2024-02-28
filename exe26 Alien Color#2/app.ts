// //Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.


//solution
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.


let color_of_alien:string="violet"
if (color_of_alien=="violet"){
    console.log("You look good.")
}
else{
    console.log("you look weird.")
}

//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
let alien_color_1:string="yellow"

if (alien_color_1  =="green"){
    console.log("the player just earned 5 points for shooting the alien")
}

//If the alien’s color isn’t green, print a statement that the player just earned 10 points.
else{
    console.log("the player just earned 10 points.")
}

//
// • Write one version of this program that runs the if block and another that runs the else block.
let course:string=" Generative Artifical Intelligence";
if (course.length>8){
    console.log(`This course having name ${course} is too lengthy to write.`)
}
else {
    console.log(`This course ${course} is Interesting to Learn.`)
}

//Autor- Huma Mohsin
//Date- 27-02-2024
//Roll# 00268003