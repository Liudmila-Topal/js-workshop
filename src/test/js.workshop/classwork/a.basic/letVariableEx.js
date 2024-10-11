/*
Example 1:
In this example, the num variable is a globally scoped variable, and it can be accessed from anywhere in the program.
 */
let num = 10;
console.log(num);

function firstExample() {
    console.log(num);
}

firstExample();

/*
Example 2:
In this example, the num variable is declared inside the function and cannot be accessed outside the function.
 */
function fun() {
    let num2 = 15;
    console.log(num2);
}

fun();

console.log(num2);

/*
Example 3:
In this example, variable x is redeclared inside other blocks.
 */
let a = 77;
{
    let a = 23;
    console.log(a);
}

console.log(a);

/*
Example 4:
In this example, variable x is redeclared inside the same blocks.
 */
let x = 99;

{
    let x = 1000; // legal
    console.log(x);
}

let x = 55; // illegal

console.log(x);