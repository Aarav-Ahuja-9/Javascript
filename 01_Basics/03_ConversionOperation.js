// let value = 20 

// // console.log(typeof value); // number // notice something that number is in lowercase, Why?

// value = "20" // what if value was in string but inside it is a number

// // We can convert this value to an acctual number :-

// console.log(typeof value); // checking initial value of value which will be // string

// let NumValue = Number(value); // Converting the string format into number format using the "Number()" method we right the method and then give the refrence of the value like in this case the "value" variable and write it like this "Number(value)" will save the converted value in the variable, and without saving it to a variable we can also write it directly in the "console.log()" statement like this :-

// console.log(NumValue); // value from the saved variable "NumValue" is 20

// console.log(Number(value)); // value directly form the "console.log()" statement is also 20

// console.log(value); // value from the variable which has number in the string fromat is also 20 but its in white color and the orignal number values are shown in yellow color
// console.log(typeof value); // the type of the value variable is not changed and it is "string"






// what if we convert string value like this "30abc" into number, let's try it out :-

// let NewValue = "30abc"; // new variable with value "30abc"

// let convertedNewValue = Number(NewValue); // converting "NewValue" variables value to number format

// console.log(typeof convertedNewValue); // checking the type of the converted value saved in "convertedNewValue" variable which is number, but what is the orignal value inside it, let's check :-

// console.log(convertedNewValue); // the output will be a special new datatype which is "NaN" or "not a number", javascript has converted the value into number but did'nt check that it has some alphabets inside. Hence, the datatype is number but orignal value is "NaN" be careful with the conversion of datatypes.





// What is we convert a boolean value into number :-

// let boolean = true // assigning boolean value into a variable // True

// let convertedBoolean = Number(boolean) // converting boolean value into number

// console.log(convertedBoolean); // the answer of the converted boolean value will be "1" and if we convert false to number we will get "0"



// Can we convert some value only to number :-

// No we can convert anything to anything like Eg., number -> string, number -> boolean, string -> boolean etc. I have to try all of these now.


// nuumber to string


// let number = 123

// console.log(String(number)) // answer will be 123 but in white color it means it is in string format
// console.log(typeof String(number)); // conforming that it a string value format


// number to boolean


// let number = 123; // I think the value "123" will not work but iam trying to know what will happen an error, NaN, null etc

// console.log(Boolean(number)); // time for the real test of the value "123" will it be a boolean value or not :-

// So, it was "true" the number "123" when converted in boolean showed up as "true" and if we convert any number into boolean expect 0 it will true with 0 as the value it will be false.


// string to boolean 

// let string = "string"; // assigning a variable string with the value "string"

// console.log(Boolean(string)) // iam not sure what will happen next after running this :-

// Sooo, the value was "true" i tested some more and found that if we write an empty string "" the result will be false and if we write any number inside the string 1323, 4515, 1, 5 etc, including 0 it will show up as true.


// boolean & number to string

let boolean = 33

console.log(String(boolean)) // converting boolean value to string

console.log(typeof String(boolean)) // checking the type of the converted value

// Sooo, the answer was true but in string format same goes for the false value, and for the number values to string it is also same

// true -> true (string format)
// false -> false (string format)
// 33 -> 33 (string format)
// 123 -> 123 (string format)

