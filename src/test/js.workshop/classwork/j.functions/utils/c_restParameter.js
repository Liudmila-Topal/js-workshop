// Function using rest parameter
function concatenate(separator, ...strings) {
    return strings.join(separator);
}

function sumAll(...numbers) {
    /*
    Summing a dynamic number of arguments.
    The 'reduce' method is an array method that takes a callback function and an optional initial value.
    It processes each element of the array and returns a single accumulated result.

    total: Represents the running total of all numbers processed so far
    num: Represents the current number in the array being processed
     */
    return numbers.reduce((total, num) => total + num, 0);
}
// TODO: Create a function with filtering out specific values using a rest parameter

module.exports = { concatenate, sumAll };