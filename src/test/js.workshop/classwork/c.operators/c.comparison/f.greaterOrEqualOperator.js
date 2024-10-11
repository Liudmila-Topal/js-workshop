/*
Example 1:
In this example, we will compare String, Number, and Boolean using Greater Than or Equal Operator.
 */
console.log("3" >= 2);
console.log("2" >= 3);
console.log(true >= false);
console.log("3" >= "2");
console.log(3 >= 2);
// The values are converted to the same data type and then compared.
// Here true is treated as one and false as 0. Therefore, true is greater than false.

/*
Example 2:
In this example, we will use the greater than or equal operator on BigInt and other data types.
 */
console.log(2n >= 2);
console.log(5n >= 4);
console.log(undefined >= null);
console.log(null >= undefined)