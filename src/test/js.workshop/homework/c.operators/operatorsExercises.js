/*
Exercise 1:
Given two numeric variables, 'a' and 'b', write the following:
- Declare 'a' and 'b'.
- Create a variable, 'add', and assign it the sum of 'a' and 'b'.
- Create a variable, 'sub', and assign it result of 'a' subtracted from 'b'.
- Create a variable, 'mul', and assign it the product of 'a' and 'b'.
- Create a variable, 'div', and assign it the result of 'a' divided by 'b'.
- Create a variable, 'inc', and assign it the pre-incremented value of 'a'.
- Create a variable, 'dec', and assign it the pre-decremented value of 'b'.

Write your code below this line.
 */

/*
Exercise 2:
Given a number, check if it’s even and not a negative number.
 */

let number = 5;
let isEvenAndNonNegative = (number % 2 === 0) && (number >= 0);

console.log(`Is the number '${number}' even and non-negative?`, isEvenAndNonNegative);

/*
Exercise 3:
Check if Two Strings are Equal.
- Declare two strings and compare them using comparison operators.
 */

let string1 = "Hello";
let string2 = "World";
let areEqual = string1 === string2;

console.log("Are the two strings equal?", areEqual);

/*
Exercise 4:
Calculate Average Grade.
Given three grades:
- Calculate the average of them.
- Determine if the student passes (average ≥ 60).
 */

let grade1 = 75;
let grade2 = 85;
let grade3 = 90;