/*
Exercise 1:
Declaring Variables.
Declare three variables using 'let', 'const', and 'var'.
Assign values to them representing your name, age, and favorite color.
Then, print their values to the console.
 */

let name = "John";
const age = 28;
var favoriteColor = "blue";

console.log("Name:", name);
console.log("Age:", age);
console.log("Favorite Color:", favoriteColor);

/*
Exercise 2:
Declaring Constants.
Create a constant using const to represent the value of Pi (3.14159).
Write a program that calculates the area of a circle given its radius.
 */

const PI = 3.14159;
let radius = 5;
let area = PI * radius * radius;

console.log("The area of the circle with radius " + radius + " is " + area);


/*
Exercise3 :
Reassigning 'let' and 'var'.
Declare two variables, one using let and the other using var.
Assign them initial values and then reassign new values.
Print both the initial and reassigned values.
 */

let city = "New York";
var country = "USA";

console.log("Original City:", city);
console.log("Original Country:", country);

city = "Los Angeles";
country = "Canada";

console.log("Updated City:", city);
console.log("Updated Country:", country);

/*
Exercise 4:
String Concatenation with Variables.
Create three 'let' variables representing first name, last name, and your hobby.
Concatenate them into a single string and print it to the console.
 */

let firstName = "John";
let lastName = "Doe";
let hobby = "playing the guitar";

let fullIntroduction = firstName + " " + lastName + " loves " + hobby + ".";
console.log(fullIntroduction);

/*
Exercise 5:
Variable Initialization and Default Value.
Declare a 'var' variable without assigning a value. Print its value before and after assigning a value to it.
 */

var myVariable;
console.log("Value before assignment:", myVariable);

myVariable = 42;
console.log("Value after assignment:", myVariable);