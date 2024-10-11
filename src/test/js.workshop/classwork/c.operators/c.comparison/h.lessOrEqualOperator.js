/*
Example 1:
In this example, we will compare String, Number, and Boolean using Less Than or Equal Operator.
 */
console.log("3" <= 2);
console.log("2" <= 3);
console.log(true <= false);
console.log("3" <= "2");
console.log(3 <= 2);
// The values are converted to the same data type and then compared.
// Here true is treated as one and false as 0. Therefore, false is less than true.

/*
Example 2:
In this example, we will use the greater than or equal operator on BigInt and other data types.
 */
console.log(2n <= 2);
console.log(5n <= 4);
console.log(undefined <= null);
console.log(null <= undefined)
// 2n is equal to 2 as the comparison is made after type conversion