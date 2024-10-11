/*
Example 1:
In this example, we will use the subtraction operator on Numbers and Strings.
 */
console.log(200 - 100);
console.log("10" - 2);
console.log("Hello" - 3); //The numbers in the string are converted to the corresponding numbers whereas words in the string are converted to NaN.

/*
Example 2:
In this example, we will perform a subtraction operation on the BigInt data type.
 */
console.log(200n - 100n);
console.log(200n - 100); // When we try to subtract the BigInt from a number we get an error.