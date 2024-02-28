"use strict";
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
//stripping means to remove something from somewhere.
//store a name as below.
let personName = "\t\t\t\n\n\nHuma\t\tMohsin\n\n\n\n"; //white spaces as per given instructions.
//printing name as it is as:-
console.log("original:", personName);
//priinting name after stripping or trimming as:-
console.log("stripping:", personName.trim());
console.log("Done by Huma-Mohsin");
