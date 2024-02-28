//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

//solution.

//we declared an interfface that helps to build and organized a set of data regarding to a car.
 interface of_car{
      manufacturer:string;
      model:string;
      [key:string]:string|number//this work is done for accept an arbitrary number of keyword arguments.It shows that options are enclosed in an array of object that have some key and corresponding to that it has some values. It is clear from that description that key must be a string and corresponding to that key value may be string or option.
 }

 // we are declaring a function for this car as:
 function create_Car(manufacturer:string, model:string,  ...options:(string|number)[]): of_car {
//create an object of car
   var car:of_car={
        manufacturer:manufacturer,
        model:model
 };

//processs optional keywords work.

for(var i=0; i<options.length;i += 2){
    var key = options[i];
    var value = options[i+1];
    car[key]=value
}
//Return an objecct
return car;

    }
    // saving a list of arguments to any variable and then call a function
    var car_argu1 = create_Car("Toyota","Vitz","color","White","year","2013/3","Mileage","54000km","Body","Hatchback")
    var car_argu2=create_Car("Honda","Hondacity","Fuel_Type","petrol","Fuel_tank_capacity","40L")
 
    //display a function
    console.log(car_argu1);
    console.log(car_argu2);

    //Author:"Huma Mohsin"
    // Roll # - 00268003
    //Date : 29-02-24