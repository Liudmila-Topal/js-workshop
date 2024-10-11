/*
Example 1:
In this example, we will use the AND operator on normal values.
 */
console.log(true && false);
console.log(true && true);
console.log(1 && 0);
console.log(1 && 2);
console.log("1" && true);
console.log("0" && true);

/*
Example 2:
In this example, we will use the AND operator on function calls.
 */
function a () {
    return true;
}
function b () {
    return true;
}

console.log(a() && b());