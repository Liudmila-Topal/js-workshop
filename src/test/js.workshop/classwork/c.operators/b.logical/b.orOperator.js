/*
Example 1:
We will use the OR operator on normal values in this example.
 */
console.log(true || false);
console.log(false || false);
console.log(1 || 0);
console.log(1 || 2);
console.log("1" || true);
console.log("0" || true);

/*
Example 2:
In this example, we will use the OR operator on function calls.
 */
function a() {
    console.log("Welcome")
    return true;
}
function b() {
    console.log("Hello")
    return false;
}
console.log(a() || b());