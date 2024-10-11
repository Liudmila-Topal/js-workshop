/*
Example 1:
Scientific Notation
 */
let a  =  156e5;
let b =   156e-5;
console.log(a);
console.log(b);

/*
Example 2:
Integer Precision
 */
let c = 999999999999999;
let d = 9999999999999999;
console.log(c);
console.log(d);

/*
Example 3:
Floating Point Precision
 */
let x = 0.22 + 0.12; // x will be 0.33999999999999997
let y = (0.22 * 10 + 0.12 * 10) / 10; // To solve this problem, multiply and divide
console.log(x);
console.log(y);

/*
Example 4:
Adding Numbers and Strings
 */
// Adding two numbers
let firstNum = 10;
let secondNum = 15;
let thirdNum = firstNum + secondNum;
console.log(thirdNum);

// Concatenating two strings:

let e = "10";
let f = "30";
let g  = e + f;
console.log(g);

/*
Example 5:
Numeric Strings
 */
let l  = "100" / "10";
let m  = "100" * "10";
let n = "100" - "10";
console.log(l);
console.log(m);
console.log(n);