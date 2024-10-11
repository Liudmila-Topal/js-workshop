/*
Example 1:
In this example, we will compare String, Number, and Boolean using Less Than Operator.
 */
console.log("3" < 2);
console.log("2" < 3);
console.log(true < false);
// The String and Boolean values are converted to Numbers and compared.

/*
Example 2:
In this example, we will compare BigInt, and other data types Less Than Operator.
 */
console.log(2 < 2n);
console.log(5n < 4);
console.log(undefined < null);
console.log(null < undefined)
// Similar to the previous example, the values are first converted to numbers and then compared.