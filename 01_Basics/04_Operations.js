// let value = 3 // a variable with value 3 inside
// let negValue = -value // This will change the value into neg of the value stored in "value" variable which is 3 and it will be changed into -3
// console.log(negValue) // printing the value of negValue variable // output will be -3

// There are some simple operations in JS which we will not discuss much, just an overview :-

// console.log(2 + 2) // Addition // output will be 4
// console.log(2 - 2) // Subtraction // output will be 0
// console.log(2 * 2) // Multiply // output will be 4
// console.log(2 ** 3) // power of // output will be 8
// console.log(2 / 2) // divide // output will be 1
// console.log(2 % 2) // remainder or modules // output will be 0

// let str1 = "Aarav" // a variable with string value "Aarav"
// let str2 = " Ahuja" // a variable with string value "Ahuja" but with a spce on the first " Ahuja"

// let str3 = str1 + str2 // Now we can add them and this will make the full name "Aarav Ahuja"

// console.log(str3) // logging the str3 to see the value or full name inside it
// This is easy but, 


// This is a bit confuing
// Now we are adding some complex confusing things

// console.log("1" + 2) // Adding a string number 1 with a original number 2 is a bit confusing right, What will be the answer?, the answer will be 12, because javascript is smart it automatically converted the non-string value into string value

// console.log(2 + "1") // what will happen now, will javascript convert the string value into a number, no javascript will make number value to string value as done before, soo thew answer will be 21

// console.log("1" + 2 + 2) // now javascript will also convert all the number values to string values, and the result will be 122

// console.log(1 + 2 + "2") // now javascript will give the answer "32" javascript will now first add the both front numbers and then show them along with the string number
// 1 + 2 -> 3
// 3 and 2 show toghether is "32"


// console.log(2 + 3 * 8 % 5) // this is not the right way to write code, this is only used for educational purposes

// console.log(+true) // Some people write this type of code for conversion and the answer will be 1, dont write this type of code
// console.log(+"") // not good 


let num1, num2, num3 
num1 = num2 = num3 = 2 + 4 // Why write this type of messy code this is not a good practice


// Prefix and Postfix

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
