
/* DATA TYPES 
Help us organize Data: 
 

STRINGS 
// let str = `Daniel`
// console.log(str.length)
// console.log(`Daniel`[0])

     
NUMBERS
// console.log(5 * 5 - 10)


BOOLEAN
// console.log(5 < 10)
// console.log(10>30)


NULL AND UNDEFINED 
Null: Refers to the value of nothing
Undefined: It means the value was never set
NaN: Stands for not a number
*/








/* VARIABLES 
They are used to store data

Strings, Numbers, Booleans, Undefined are all stored in variables.

How do you define a variable?

Var: NOT USED IN TOP TECH 


let: it is used to define a variable

Example:
let name = "DANIEL"
console.log(name)

let isRaining = true
console.log(isRaining)

let temperature = 20
temperature = temperature + 5
console.log(temperature)


const: CONST is almost the same as let, the only thing is you cannot reassign a const variable


EQUALITY 
"==" Double equals checks only the value:
"===" Triple equals checks the value and the types: 

Example:
let bool = "1" === 1
console.log(bool)  
*/









/* CONDITIONALS 

Conditionals uses "if" or "else if" statements 

Example: if Im logged in show him the video, else tell him to log in

let subscribed = true
let loggedIn = true

if (subscribed === true){
    console.log(`show the video`)
}

else if (loggedIn === true){
    console.log(`tell user to upgrade`)
}

else {
    console.log(`tell user to login`)
}



* LOGICAL OPERATORS *
&& : checks if the left and right side of the comparison is true
|| : checks if the left or right side of the comparison is true



* Ternary Operators *
A shortcut for an "if" "else" condition

A ternary operator is good for when you want to only right a short condition

*/








/* LOOPS 
Loops basically repeat the code over and over again

There are 3 types of Loops in JavaScript:
- for loop : this is the most used
- while loop
- do while loop

Example of for loop:
*WE USE CONST BECAUSE OF BETTER PRACTICE AS WE DONT REASIGN THE VARIABLE

const str = "Daniel"

for (let i = 0; i < str.length; i++){
    console.log(str[i])
}


*/







// FUNCTIONS 

/* 
A Functions is a block of code designed to perform a particular task

EXAMPLES:

function welcome (name){
    console.log(`Welcome, ${name}`)
}

welcome (`Daniel`)


Example #2

function weather (celsius){
    return celsius * 1.8 + 32
}

console.log(weather(0))
console.log(weather(10))


*/






// ARRAYS

/* 
ARRAYS are data structures that can hold multiple data values in one variable

Example:
IN THIS EXAMPLE WE ACCESS THE FIRST NUMBER AND ALSO THE LAST NUMBER

let arr = [20, 30, 40, 50, 100]
console.log(arr[0])

console.log(arr[arr.length -1])

arr.push(200)
console.log(arr)
*/


// SHORT WAY FOR AN ARRAY

// let grades = ["A", "B", "FAIL"]

// let goodGrades = grades.filter(element => element !== "FAIL")

// console.log(goodGrades)


// LONG WAY:

// let grades = ["A", "B", "FAIL"]

// let goodGrades = grades.filter((element) => {
//     console.log(element)
//     if (element !== "FAIL"){
//         return true
//     }
// })

// console.log(goodGrades)




// FILTERING OUT BAD GRADES WITHOUT FILTER METHOD

// let grades = ["A", "B", "FAIL"]

// let goodGrades = []

// for (let i = 0; i < grades.length; i++){
//     if (grades[i] !== "FAIL"){
//         goodGrades.push(grades[i])
//     }
// }

// console.log(goodGrades)




/* HOW TO MAP WITHOUT USING THE MAP METHOD

// let dollars = [1, 5, 10, 3]
// let cents = []

// for ( let i =0; i < dollars.length; i++){
//     cents.push(dollars[i]*100)
// }

// console.log(cents) */








/*  OBJECTS SECTION
Objects are used to store multiple properties in one variable

Objects are {}
Arrays are []


*/







/* DOM (Document Object Model) 
The DOM allows to access and change the styling and content of elements on your website


// // First way of accessing an element 
// console.log(document.querySelector(`#title`))

// // console.log(document.querySelector(`.title`)) this is if its a class instead of an Id


// // Second way of accessing an element, only works with id

// console.log(document.getElementById(`title`))

*/
