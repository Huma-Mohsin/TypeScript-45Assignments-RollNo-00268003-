//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

//stores a person's name in a variable

let personname:string="HumA MOhsin"

//print a name in lowercase.

console.log("Lowercase:",personname.toLowerCase());

//print a name in uppercase.

console.log("Uppercase:",personname.toUpperCase());

//print a name in titlecase.

//what is title case in TS?
//Title case is a way of capitalizing each word in a sentence or phrase.

console.log("title case:",personname.replace(/\w\S*/g,change=>change.toUpperCase()))

// here (/\w\S*/g,change=>change.toUpperCase) shows each character of first word is change by uppercase.

console.log("done by Huma-Mohsin")

//AUTHOR-"HUMA MOHSIN"
//DATE- 27-02-2024
//ROLL NO- 00268003