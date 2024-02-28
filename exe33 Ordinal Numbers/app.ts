// //Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

 //solution.

 //Store the numbers 1 through 9 in a array.
 let ordinal_number_list:number[]=[1,2,3,4,5,6,7,8,9,]
 console.log(`Ordinal Number List:${ordinal_number_list}`)

 //Loop through the array.
 for(const num of ordinal_number_list){
    if (num===1){
        console.log(`${num}st`)
    }
    else if(num===2){
        console.log(`${num}nd`)
    }
    else if (num===3){
        console.log(`${num}rd`)
    }
    else{
        console.log(`${num}th`)
    }
 }
 //Author- "Huma Mohsin"
 //Roll # 00268003
 //Date- 27-02-24