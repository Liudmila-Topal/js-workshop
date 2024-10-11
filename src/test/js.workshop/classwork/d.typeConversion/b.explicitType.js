/*
Example 1:
Here are examples of explicit conversion to String data type using String(value) constructor.
 */
const a = String(0);
const b = String('');
const c = String(true);
const d = String(NaN);
const e = String(undefined);
const f = String(null);
const g = String(Symbol());
const h = String(Symbol('x'));
const i = String(-105.4);
const j = String([]);
const k = String({});
const l = String({a: 'a'});

console.log(`Type of '${a}' is`, typeof a)
console.log(`Type of '${b}' is`, typeof b)
console.log(`Type of '${c}' is`, typeof c)
console.log(`Type of '${d}' is`, typeof d)
console.log(`Type of '${e}' is`, typeof e)
console.log(`Type of '${f}' is`, typeof f)
console.log(`Type of '${g}' is`, typeof g)
console.log(`Type of '${h}' is`, typeof h)
console.log(`Type of '${i}' is`, typeof i)
console.log(`Type of '${j}' is`, typeof j)
console.log(`Type of '${k}' is`, typeof k)
console.log(`Type of '${l}' is`, typeof l)

/*
Example 2:
Here are examples of explicit conversion to String data type using value.toString() method.
 */
let num = 5;
let str = num.toString();
console.log(`Type of '${str}' is`, typeof str);

let binStr = num.toString(2);
console.log(`Type of '${binStr}' is`, typeof binStr);

/*
Example 3:
Here are examples of explicit conversion to Number data type using Number(value) constructor.
 */
const a1 = Number(0);
const b1 = Number('');
const c1 = Number(null);
const d1 = Number(NaN);
const e1 = Number(undefined);
const f1 = Number(true);
const g1 = Number(false);
const h1 = Number('   5    ');
const i1 = Number(' ');
const j1 = Number('\n');
const k1 = Number('-1/2');
const l1 = Number('105.4');

console.log(`Type of '${a1}' is`, typeof a1)
console.log(`Type of '${b1}' is`, typeof b1)
console.log(`Type of '${c1}' is`, typeof c1)
console.log(`Type of '${d1}' is`, typeof d1)
console.log(`Type of '${e1}' is`, typeof e1)
console.log(`Type of '${f1}' is`, typeof f1)
console.log(`Type of '${g1}' is`, typeof g1)
console.log(`Type of '${h1}' is`, typeof h1)
console.log(`Type of '${i1}' is`, typeof i1)
console.log(`Type of '${j1}' is`, typeof j1)
console.log(`Type of '${k1}' is`, typeof k1)
console.log(`Type of '${l1}' is`, typeof l1)

/*
Example 4:
Here are examples of explicit conversion to number data type using parseFloat() method.
 */
const a2 = parseFloat(3.14);
const b2 = parseFloat("3.14");
const c2 = parseFloat("  3.14  ");
const d2 = parseFloat("314e-2");
const e2 = parseFloat("0.0314E+2");
const f2 = parseFloat("3.14some non-digit characters");
const g2 = parseFloat("NaN");

console.log(`Type of '${a2}' is`, typeof a2)
console.log(`Type of '${b2}' is`, typeof b2)
console.log(`Type of '${c2}' is`, typeof c2)
console.log(`Type of '${d2}' is`, typeof d2)
console.log(`Type of '${e2}' is`, typeof e2)
console.log(`Type of '${f2}' is`, typeof f2)
console.log(`Type of '${g2}' is`, typeof g2)

/*
Example 5:
Here are examples of explicit conversion to number data type using parseInt() method.
 */
const a3 = parseInt('123');
const b3 = parseInt('123', 10);
const c3 = parseInt('   123 ');
const d3 = parseInt('077');
const e3 = parseInt('1.9');
const f3 = parseInt('ff', 16);
const g3 = parseInt('0xFF', 16);
const h3 = parseInt('xyz');

console.log(`Type of '${a3}' is`, typeof a3)
console.log(`Type of '${b3}' is`, typeof b3)
console.log(`Type of '${c3}' is`, typeof c3)
console.log(`Type of '${d3}' is`, typeof d3)
console.log(`Type of '${e3}' is`, typeof e3)
console.log(`Type of '${f3}' is`, typeof f3)
console.log(`Type of '${g3}' is`, typeof g3)
console.log(`Type of '${h3}' is`, typeof g3)
