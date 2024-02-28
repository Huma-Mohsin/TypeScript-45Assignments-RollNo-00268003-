"use strict";
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
Object.defineProperty(exports, "__esModule", { value: true });
// we are declaring a function for this car as:
function create_Car(manufacturer, model, ...options) {
    //create an object of car
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    //processs optional keywords work.
    for (var i = 0; i < options.length; i += 2) {
        var key = options[i];
        var value = options[i + 1];
        car[key] = value;
    }
    //Return an objecct
    return car;
}
// saving a list of arguments to any variable and then call a function
var car_argu1 = create_Car("Toyota", "Vitz", "color", "White", "year", "2013/3", "Mileage", "54000km", "Body", "Hatchback");
var car_argu2 = create_Car("Honda", "Hondacity", "Fuel_Type", "petrol", "Fuel_tank_capacity", "40L");
//calling aFunction.
console.log(car_argu1);
console.log(car_argu2);
