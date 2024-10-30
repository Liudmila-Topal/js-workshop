function factorial(n) {
    let result = 1;
    let tmp = n;
    while (tmp > 0) {
        result *= tmp;
        tmp--;
    }
    return n > 0 ? result : n;
}

console.log(factorial(5)); // Output 120
console.log(factorial(-5)); // Output -5