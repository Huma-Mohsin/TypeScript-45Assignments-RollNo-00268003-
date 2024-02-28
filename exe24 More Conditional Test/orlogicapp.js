"use strict";
//Tests using "and" and "or" operators
//test for or operator:-
let in_1 = 0;
let in_2 = 0;
//a/c to or logic.
if (in_1 == 1 || in_2 !== 0) {
    console.log("The bulb will glow as current  pass through it.");
}
else if (in_1 == 0 || in_2 == 0) {
    console.log("The bulb will not glow as no current pass through it.");
}
else if (in_1 == 1 || in_2 == 1) {
    console.log("The bulb will also still glow as current pass through it.");
}
else {
    console.log("The bulb will glow current pass through it.");
}
