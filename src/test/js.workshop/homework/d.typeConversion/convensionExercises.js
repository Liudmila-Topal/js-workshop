/*
Example 1:
Explore the differences between implicit and explicit conversions when performing
subtraction on a string that can be converted to a number and a boolean.
 */

let strNum = "20";
let boolValue = true;
// let implicitResult = strNum - boolValue;
// let explicitResult = Number(strNum) - Number(boolValue);
//
// console.log("Implicit subtraction result:", implicitResult);
// console.log("Explicit subtraction result:", explicitResult);

/*
Example 2:
Test how JavaScript handles concatenation of various types (string, number, boolean) when using implicit conversions.
 */

let num = 10;
let boolValue2 = false;
let str = "The result is: ";
// let result = str + num + boolValue2;
//
// console.log("Result of mixed type concatenation:", result);

/*
Example 3:
Show the outcomes of converting a string that cannot be parsed as a number to both a number and a boolean.
 */

let invalidNumStr = "Hello";
// let numberResult = Number(invalidNumStr);
// let booleanResult = Boolean(invalidNumStr);
//
// console.log("Converted number result:", numberResult);
// console.log("Converted boolean result:", booleanResult);