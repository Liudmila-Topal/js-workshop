/*
Example 1:
This example shows the use of the JavaScript Unary plus(+) Operator. It converts a string into a number.
 */
const x = "10";
let y;
y = +x;
console.log(y);
console.log(typeof y);

/*
Example 2:
The following example demonstrates a unary method with numbers.
 */
const a = 100;
const b = -100;
const c = 20;

console.log(+a);
console.log(+b);
console.log(+c);

/*
Example 3:
The following example demonstrates a unary method with non-numbers.
 */
const e = true;
const f = false;
const g = null;
const h = function (x) {
    return x
};

console.log(+e);
console.log(+f);
console.log(+g);
console.log(+h);