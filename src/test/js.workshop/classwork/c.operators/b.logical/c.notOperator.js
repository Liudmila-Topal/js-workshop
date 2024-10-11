/*
Example 1:
In this example, we will use the NOT operator on some boolean and other data types.
 */
console.log(!true);
console.log(!false); // We can see that the values converted to true are flipped and false is returned and vice versa.
console.log(!"1");
console.log(!"");
console.log(!null);

/*
Example 2:
In this example, we will use two NOT operators on the same boolean and other data types.
 */
console.log(!!true);
console.log(!!false);
console.log(!!"1");
console.log(!!"");
console.log(!!null); // When we applied the NOT operator two times we got the original boolean value back.