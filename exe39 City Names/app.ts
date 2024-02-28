// //City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

//solution
//Write a function called city_country() that takes in the name of a city and its country.
function City_Country(city:string,country:string):string{
    return `${city},${country}`//returns some data
}
//Call your function with at least three city-country pairs
let x=City_Country("Lahore","Pakistan")
let y=City_Country("Tokyo","Japan")
let z=City_Country("Kabul","Afghanistan")

//print the value that’s returned.
console.log(x);
console.log(y);
console.log(z);

//Author:- "Huma Mohsin"
//Roll no:- 00268003
//Date:- 27-02-24