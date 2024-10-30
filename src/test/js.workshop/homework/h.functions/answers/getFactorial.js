function factorial(n) {
    let result = 1;
    // Saving given parameter in a temporary variable
    let tmp = n;
    while (tmp > 0) {
        result *= tmp;
        tmp--;
    }
    // Checking if given parameter is positive or negative to return the correct value
    return n > 0 ? result : n;
}

console.log(factorial(5)); // Output 120
console.log(factorial(-5)); // Output -5