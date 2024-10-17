/*
Numbers data type.

Example 1:
Scientific Notation.
typeOf - operator returns the data type of JavaScript variable.
 */
let a  =  156e5;
let b =   156e-5;

console.log(`Type of '${a}' is`, typeof a);
console.log(`Type of '${b}' is`, typeof b);

/*
Example 2:
Integer Precision.
 */
let c = 999999999999999;
let d = 9999999999999999;

console.log(`Type of '${c}' is`, typeof c);
console.log(`Type of '${d}' is`, typeof d);

/*
Example 3:
Floating Point Precision.
 */
let x = 0.22;

console.log(`Type of '${x}' is`, typeof x);

/*
String data type.

Example 1:
Single Quotes.
 */
let str = 'Create String with Single Quote';

console.log(`Type of '${str}' is`, typeof str);

/*
Example 2:
Double Quotes.
 */
let str2 = "Create String with Double Quote";

console.log(`Type of '${str2}' is`, typeof str2);

/*
Example 3:
String Constructor.
 */
let str3 = String('Create String with String Constructor');

console.log(`Type of '${str3}' is`, typeof str3);

/*
Example 4:
Template Literals (String Interpolation).
 */
let str4 = 'Template Literal String';
let newStr = `String created using ${str4}`;

console.log(`Type of '${newStr}' is`, typeof newStr);

/*
Example 5:
Empty String.
 */
let str5 = '';
let str6 = "";

console.log("Empty String with Single Quotes: " + str5);
console.log("Empty String with Double Quotes: " + str6);

/*
Boolean data type.
Example 1:
 */
let a1 = true;
let a2 = false;

console.log(`Type of '${a1}' is`, typeof a1);
console.log(`Type of '${a2}' is`, typeof a2);

/*
Null data type.
Example 1:
This example describes the Null value in JavaScript.
 */
const var2 = null;
if (var2) {
    console.log('var2 is not null');
} else {
    console.log('var2 is null');
}

/*
Undefined data type.
Example 1:
In the below example, the variable name is declared but not assigned with any value, so it gets an Undefined value.
 */
let newVar;
console.log(`Type of 'newVar' is`, typeof newVar);

/*
Example 2:
undefined Value in Functions.

In the below example test() function actually outputs and returns nothing.
We assigned the test function to the x variable, so we get an Undefined value in the x variable as the test() function returns nothing.
 */
function test(name) {
    console.log(`Hi ${name}`);
}
x = test('Tom');
console.log(`Value in variable 'x' is ${x}`);

/*
Example 3:
undefined value in Object Properties.
 */
const person = { name: "Alice" };
let age = person.age;
console.log(`Type of 'age' is`, typeof age);