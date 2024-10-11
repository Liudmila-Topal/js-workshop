/*
Example 1:
In this example, we will compare the value of the same data types.
 */
let a = 2, b=2, c=3;
let d = {name:"Ram"};
let e = {name:"Ram"};
let f = e;

console.log(a === b);
console.log(a === c);
console.log(d === e);
console.log(f === e);
// Just like other comparisons when two objects are compared their reference is checked and true is only returned if the reference is the same.

/*
Example 2:
In this example, we will use the strict equality operator on different data types.
 */
let g = 2;
let h= "2";
let i = true;
let j = null;
let k = undefined;

console.log(g === h);
console.log(g === i);
console.log(j === k);
// Even though some values are the same but still false is returned as the data type is different.