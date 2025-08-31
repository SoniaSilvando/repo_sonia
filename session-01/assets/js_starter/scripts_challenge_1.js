// Challenge 5 Solution
// Initialise the array
let numbers = [1, 2, 3, 4, 5];

// Define the function doubleNumbers
function doubleNumbers(arr) {
     let doubled = arr.map(number => number * 2);
     return doubled;
     
}

// Call the function with the numbers array
let result = doubleNumbers(numbers)
// Console log the new array
console.log(result);

//_________________________________________________________________________________
//Create a function named celsiusToFahrenheit(c) that returns the Fahrenheit value 
// for a given Celsius input using the formula
//  c * 9/5 + 32. Then call the function with 28 and log the result to the console.

function celsiousToFahrenheit (c){
return  c * 9/5 + 32
} 

console.log(celsiousToFahrenheit(28))
//_______________________________________________________________________________

//Challenge 1: Calcular precios con IVA
// Challenge 1 Solution
// Initialise the array
let precios = [100, 200, 300, 400];

// Define the function addIVA
function addTAX(arr){
     let withTAX = arr.map(price => price * 1.19);
     return withTAX;
}
// Call the function with the precios array
let resulttax = addTAX(precios)
// Console log the new array
console.log(resulttax);

 //Debería devolver un array nuevo con cada precio multiplicado por 1.19 (19% de IVA).
 //______________________________________________________________________________-
// Challenge 2 Solution
// Initialise the array
let minutos = [30, 60, 90, 120];

// Define the function toHours

// Call the function with the minutos array

// Console log the new array
console.log(result);
// Debería devolver un array nuevo con cada valor dividido entre 60 (para mostrar horas).



