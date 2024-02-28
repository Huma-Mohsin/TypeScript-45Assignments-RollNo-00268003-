//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

//solution:-
//Write a function called describe_city() that accepts the name of a city and its country
 //give it parameters by default.
function describe_city(name:string="Karachi", country:string="Pakistan"){
   // The function should print a simple sentence, such as Karachi is in Pakistan.
   console.log(`${name} is in ${country}`)
}
//Call your function for three different cities, at least one of which is not in the default country

describe_city("Paris","France")
describe_city("Kenya","Nairobi")
describe_city("Islamabad","Pakistan")
// AUTHOR- "HUMA MOHSIN"
//ROLL NO.- 00268003
//DATE- 28-02-2024