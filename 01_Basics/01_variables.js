// Variables in Javascript

const accountId = 101201200; // This is an constant variable, so it cannot be chaged later
let accountName = "Aarav Ahuja"; // This is an let keyword variable, so it can be chaged later but its scope is limited to the block
var accountPassword = "Aarav@123"; // This is an var keyword variable, so it can be chaged later and its scope is global
accountCity = "Kharar"; // This is an undeclared variable, so it can be chaged later and its scope is global

/*  KEYWORDS IN JAVASCRIPT

    Keywords in JavaScript are reserved words that have special meaning in the language syntax. They are used to define variables, control flow, declare functions, classes, and more. Examples include:
    - const: Declares a block-scoped constant variable.
    - let: Declares a block-scoped variable.
    - var: Declares a function-scoped or globally-scoped variable.
    Other keywords: if, else, for, while, function, return, class, import, export, switch, case, break, continue, try, catch, finally, etc.

*/

// And one more thing, you cannot use keywords like "let", "const", "console", "var", "function", etc. as variable names in JavaScript, as they are reserved for specific purposes in the language syntax.

// Let's check is all values are changeable or not changeable

console.table([accountId, accountName, accountPassword, accountCity]); // This line will print all the values in a table format in the node.js terminal before changing them.

// Let's first check the "const" constant variable


console.log("Account ID:", accountId); // Output: 101201200
// accountId = 2222222222; // This will throw an error because accountId is an constant variable so the constant variables cannot be changed later.
console.log("Account ID after trying to change:", accountId); // Output: 101201200 // Output will be the same as before but dont change an constant variable because it will throw an error to you, note: now it will not show the error beause we have commented the line above.

// Let's check the "let" variable


console.log("Account Name", accountName) // Output: 101201200
accountName = "Aarav"; // This will change the value of accountName variable because it is a let variable and let variables can be changed later.
console.log("Account Name after changing:", accountName); // Output: 2222222222

// Let's check the "var" variable


console.log("Account Password:", accountPassword); // Output: Aarav@123
accountPassword = "Aarav@456"; // This will change the value of accountPassword variable because it is a var variable and var variables can be changed later.
console.log("Account Password after changing:", accountPassword); // Output: Aarav@456

// Let's check the variable with no keyword


console.log("Account City:", accountCity); // Output: Kharar
accountCity = "Chandigarh"; // This will change the value of accountCity variable because it is an undeclared variable and undeclared variables can be changed later.
console.log("Account City after changing:", accountCity); // Output: Chandigarh                       

console.table([accountId, accountName, accountPassword, accountCity]); // This line will print all the values in a table format in the node.js terminal after changing them. // But before running this line, make sure you have changed the values of the variables, otherwise it will show the same values as before.



// Note: In JavaScript, it is a good practice to use "const" for variables that should not change, "let" for variables that can change within a block scope, and "var" for variables that can change globally or within a function scope. Using "var" is generally discouraged in modern JavaScript due to its function scope and potential for confusion with hoisting.

// Also, avoid using undeclared variables as they can lead to unexpected behavior and make your code harder to debug. Always declare your variables using "const" or "let" to ensure clarity and maintainability of your code, make sure to not use "var" keyword in your code.