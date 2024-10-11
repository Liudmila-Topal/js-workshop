/*
Example 1:
undefined Value in Variables.
In the below example, the variable name is declared but not assigned with any value, so it gets an Undefined value.
 */
let newVar;
console.log(newVar)

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
console.log(`Value in variable 'x' = ${x}`);

/*
Example 3:
undefined value in Object Properties.
 */
const person = { name: "Alice" };
console.log(person.age);