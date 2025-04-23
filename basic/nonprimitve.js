/**
 * 
 * Great! In JavaScript, non-primitive (or reference) data types are those that don't hold the actual value directly, but instead hold a reference to it in memory.
 * 
 * Primitive types (like string, number) = actual value.
    Non-primitive types = reference/pointer to where the value lives in memory.

Data Type	    Description
Object	        A collection of key-value pairs. Can store anything inside.
Array	        A special type of object that stores ordered elements by index.
Function	    A callable object. Yes, functions are also objects in JS.
Date	        Built-in object for working with dates and times.
RegExp	R       egular expressions for pattern matching in strings.
Map / Set	    ES6 structures for storing unique values or key-value pairs flexibly.
 */


// Object
let person = { name: "Amit", age: 25 };

// Array
const colors = ["red", "green", "blue"];

// Function
function greet() {
  console.log("Hello!");
}

// Date
let today = new Date();

// Map
let myMap = new Map();
myMap.set("key", "value");

//colors=["yellow","red", "green", "blue"];//TypeError: Assignment to constant variable.  

/**
 * 
 * You're telling JavaScript:
 * “Hey, I want arr to now point to a different array object.”
But const says:

“Nope! You told me arr would always point to the same object, and now you’re breaking that promise.”

So JavaScript throws an error.
 */

//but  you  perform  this
colors.push("yellow");
console.log(colors);
const  obj1= {
    name:"Amit",
    adress:{
        lane:"3",
        colony:"rjp",
        

    }
}

console.log(obj1);