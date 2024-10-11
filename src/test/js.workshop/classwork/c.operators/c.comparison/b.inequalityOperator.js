/*
Example 1:
In this example, we will use the inequality operator on the same data types.
 */
let a = 1;
let b = 2;
let c = String("Hello");
let d = String("Hello");
let e = "Hello";

console.log(a != b);
console.log(c != d);
console.log(c != e);
/*
Strings c and d are the same but when created using a constructor they are treated as objects and hence c != d operation
returns true as their reference is different but when compared with String d type conversion takes place to string and false is returned.
 */

/*
Example 2:
In this example, we will use the inequality operator on different data types.
 */
let f = 1;
let g = "1";
let h = true

console.log(f != g);
console.log(g != h);
console.log(f != h);
// Type conversion takes place and all the values are found equal so false is returned.

/*
Example 3:
In this example, we will compare objects using the inequality operator.
 */
let i = {
    name: "Ram",
}
let j = {
    name: "Ram",
}
console.log(i != j)
// Even though both objects contain the same value but their reference is different so true is returned.