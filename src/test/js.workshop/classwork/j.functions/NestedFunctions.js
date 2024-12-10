function outerFunction(x) {
    // innerFunction is nested within outerFunction and has access to `x`
    function innerFunction(y) {
        return x + y; // innerFunction uses both `x` from outer scope and `y` passed to it
    }
    return innerFunction(10); // Calls innerFunction with 10 as argument
}
console.log(outerFunction(5)); // Output: 15 (5 + 10)


function makeMultiplier(multiplier) {
    // multiply is nested and forms a closure with `multiplier` from makeMultiplier
    function multiply(number) {
        return number * multiplier; // `multiplier` is accessible here due to closure
    }
    return multiply; // Returns the nested multiply function
}

const double = makeMultiplier(2); // double is now a function that multiplies by 2
console.log(double(5)); // Output: 10 (5 * 2)


function outer() {
    function middle() {
        function inner() {
            return "Hello from the innermost function!"; // Returns a string from innermost function
        }
        return inner(); // Calls and returns inner function's result
    }
    return middle(); // Calls and returns middle function's result
}
console.log(outer()); // Output: Hello from the innermost function!
