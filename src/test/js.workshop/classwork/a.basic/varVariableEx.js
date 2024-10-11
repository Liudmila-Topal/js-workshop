/*
Example 1:
In this example, we will declare multiple variables in a single statement
 */
var test1 = 12,
    test2= 14,
    test3 = 16
function firstExample(){
    console.log(test1, test2, test3);
}
firstExample();

/*
Example 2:
In this example, we will see the hoisting of variables declared using var
 */
console.log(test4);
var test4 = 50;

/*
Example 3:
In this example, we will redeclare a variable in the same global block
 */

var test5 = 99;
var test5 = 999;
console.log(test5);
//We did not get any error when redeclaring the variable if we did the same with the let keyword an error would be thrown

/*
Example 4:
In this example, we will redeclare the variable in another scope and see how it is the original variable.
 */
var test6 = 35;
function forthExample(){
    var test6 = 1000;
    console.log(test6);
}
forthExample();
console.log(test6);
// We did not get any error while redeclaring the variable inside another function scope and the original value of the variable is preserved.