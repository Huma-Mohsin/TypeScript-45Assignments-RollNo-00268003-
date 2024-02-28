"use strict";
// //Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
//---------------------------------------------------------------------------
//solution.
//Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let alien_colors = ["green", "yellow", "red"];
//Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
let alien_color = "green";
if (alien_color == "green") {
    console.log("the player just earned 5 points.");
}
else {
    console.log("the player does not just earned 5 points.");
}
//Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
let alien_ver_col = "red";
if (alien_ver_col == "blue") {
    console.log("it is not red in color");
}
else {
    console.log("No output related to your matches");
}
//Author# HumaMohsin
//Roll# 00268003
//date:26-2-2024
