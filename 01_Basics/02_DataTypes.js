// Data Types in Javascript

// First we will know something about "use strict" in JavaScript

// "use strict"; // This line enables strict mode in JavaScript, which helps catch common coding errors and "unsafe" actions such as defining global variables unintentionally. It is a good practice to use strict mode to write cleaner and more reliable code.

// Some people use the method "alert()" to show the output in a popup box. but its not recommended for production code. and it will not run in Node.js environment. It is only used in browser environments. And not Node.js and other environments. But here's how the syntax looks like:
// alert("Hello, World!"); // This will show a popup with the message "Hello, World!" but is not recommended for production code. and dont uncomment thsi line in Node.js environment.

// Code Readability :-

// Code readability is very important in programming. It helps others (and yourself) understand the code better. Here are some tips for writing readable code:
// 1. Dont use single letter variable names. Use descriptive names instead.
let x = 5; // Not recommended
let numberOfApples = 5; // Recommended

// 2. Dont write code in one line. Use multiple lines for better readablility.

// console.log("Aarav"); console.log("Ahuja"); // Not recommended


// console.log("Aarav");
// console.log("Ahuja"); // Recommended

// 3. Use comments to explain your code. Comments are ignored by the JavaScript engine and are only for humans to read.
// This is a single line comment
/*This is a multi-line comment
It can span multiple lines*/                                    

// 4. Use right indentation to make your code more readable. Indentation helps to visually separate blocks of code.
if (true) {
    // console.log("This is true");
}       else {
    // console.log("This is false");
} // Not Recommended

if (true) {                     
    // console.log("This is true"); 
} else {
    // console.log("thsi is false");
} // Recommended

// 4. Dont right code like this :-

// console.log(1    
//     + 5   ) // This will work but see how messy it looks, it's // Not recommended

// console.log(1 + 5); // This is how it should be written, it's more readable and clean. // Recommended

// DATA TYPES IN JAVASCRIPT

let name = "Aarav"; // String
let age = 12; // Number
let isStudent = true; // Boolean
let state;
let nullValue = null; // Null

// There are many data types in JAvaScript, but the most common ones are:

// number --> numbers like 1, 2, 3, 4, 5, etc. can be written in JavaScript. They are called as "number" data type.
let num = 10; // This is a number

// console.log(num); // Output: 10
// console.log(typeof num); // Output: number // if we use the "typeof" operator in starting, it will return the data type of the variable.
// console.log(num ,"is of type:", typeof num); // Output: number

// BigInt --> BigInt is use for big numbers that are larger than the maximum safe integer in JavaScript. It is denoted by adding "n" to the end of the number.
let bigNum = 1234567890123456789012345678901234567890n; // This is a BigInt

// console.log("");
// console.log(bigNum); // Output: 1234567890123456789012345678901234567890n
// console.log(bigNum ,"is of type:", typeof bigNum); // Output: bigint

// String --> "Ahuja Aarav" is a string. Strings are used to represent text in JavaScript. They can be enclosed in single quotes, double quotes, or backticks (template literals).
let str = "Aarav Ahuja"; // This is a string

// console.log("");
// console.log(str); // Output: Aarav Ahuja
// console.log(str ,"is of type:", typeof str); // Output: string

// Boolean --> Simply put, true if yes and false if no. boolean is a data type that can have only two values: true or false. It is often used for conditional statements.
let isLoggedIn = true; // This is a boolean

// console.log("");
// console.log(isLoggedIn); // Output: true
// console.log(isLoggedIn ,"is of type:", typeof isLoggedIn); // Output: boolean

// null --> null is a special value that represents the intentional absence of any object value. It is often used to indicate that a variable has no value or that an object is empty.

let emptyValue = null; // This is a null value

// console.log("");
// console.log(emptyValue); // Output: null
// console.log(emptyValue ,"is of type:", typeof emptyValue); // Output: object (this is a known bug in JavaScript, null is actually of type object, this is an great debate in the JavaScript community)

// undefined --> undefined is a special value that indicates that a variable has been declared but the user has not assigned a value to it yet. It is often used to indicate that a variable has no value.
let notAssigned; // This is an undefined value

// console.log("");
// console.log(notAssigned); // Output: undefined
// console.log(notAssigned ,"is of type:", typeof notAssigned); // Output: undefined

// symbol --> Symbol is a new data type introduced in ES6 (ECMAScript 2015). It is used to create unique identifiers for objects. Symbols are often used to create private properties in objects.
let uniqueSymbol = Symbol("unique"); // This is a symbol            

// console.log("");
// console.log(uniqueSymbol); // Output: Symbol(unique)                 
// console.log(uniqueSymbol ,"is of type:", typeof uniqueSymbol); // Output: symbol

console.table([typeof num, typeof bigNum, typeof str, typeof isLoggedIn, typeof emptyValue, typeof notAssigned, typeof uniqueSymbol]); // This will show the data types of the variables in a table format