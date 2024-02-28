"use strict";
//Tests using "and" and "or" operators
//for AND operator:-
let input_1 = 1;
let input_2 = 1;
//A/C TO LOGIC
if (input_1 == 1 && input_2 !== 0) {
    console.log("The bulb will glow");
}
else if (input_1 !== 1 && input_2 !== 0) {
    console.log("The bulb will also not glow");
}
else if (input_1 !== 1 && input_2 == 0) {
    console.log("The bulb will also not glow in this condition too");
}
else {
    console.log("The bulb will also not glow in this condition also");
}
