/*
Example 1:
Number to String Conversion.
In this example, we are adding numbers with strings and so on.
The Number 10 is converted to string '10' and then '+' concatenates both strings.
 */
let x = 10 + '20';
let y = '20' + 10;

// The Boolean value true is converted to string 'true' and then '+' concatenates both the strings.
let z = true + '10';

console.log(`Type of '${x}' is`, typeof x);
console.log(`Type of '${y}' is`, typeof y);
console.log(`Type of '${z}' is`, typeof z);

/*
Example 2:
String to Number Conversion.
In this example, we are converting string to number implicitly.
The string '5' is converted to number 5 in all cases implicitly.
 */
let a = 10 - '5';
let b = 10 * '5';
let c = 10 / '5';
let d = 10 % '5';

console.log(`Type of '${a}' is`, typeof a);
console.log(`Type of '${b}' is`, typeof b);
console.log(`Type of '${c}' is`, typeof c);
console.log(`Type of '${d}' is`, typeof d);

/*
Example 3:
In this example, we are converting Boolean to number implicitly.
The Boolean value true is converted to number 1 and then operation is performed.
 */
let e = true + 2;

// The Boolean value false is converted to number 0 and then operation is performed.
let f = false + 2;

console.log(`Type of '${e}' is`, typeof e);
console.log(`Type of '${f}' is`, typeof f);

/*
Example 4:
In this example, we are using == operator for checking the type of the values.
 */
// Should output 'true' as string '10' is coerced to number 10.
let g = (10 == '10');

// Should output 'true', as boolean true is coerced to number 1.
let h = (true == 1);

// Should output 'false' as string 'true' is coerced to NaN which is not equal to 1 of Boolean true.
let i = (true == 'true');

console.log(`Type of '${g}' is`, typeof g);
console.log(`Type of '${h}' is`, typeof h);
console.log(`Type of '${i}' is`, typeof i);