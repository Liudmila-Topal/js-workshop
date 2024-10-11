/*
Example 1:
In this example, we will use the equality operator on the same data types.
 */
let a = 1;
let b = 1;
let c = String("Hello");
let d = String("Hello");
let e = "Hello";

console.log(a == b);
console.log(c == d);
console.log(c == e);
/*
Even though c, d, and e are all strings but their comparison in one case returned false because when String is created
with the help of Constructor it is treated as an object so when we are comparing c and d two objects are compared and
only their reference is being checked which is different but when c is compared with e type conversion takes place and
both are compared as a string which returns true.
 */

/*
Example 2:
In this example, we will use the equality operator on different data types.
 */
let f = 1;
let g = "1";
let h = true

console.log(f == g);
console.log(g == h);
console.log(f == h);
/*
The boolean and string values are converted to numbers then comparison takes place so true is returned in all cases
 */

/*
Example 3:
In this example, we will compare Date with String using the equality operator.
 */
let i = new Date();
let j = i.toString();
console.log(i == j);
/*
When the date object is compared with the string it is first converted to a sting so the comparison returns true.
 */