function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num > 0) {
            resolve("Number is positive");
        } else {
            reject("Number is not positive");
        }
    });
}

// TODO: Create a new function with Promise to reverse string  for existing tests

// TODO: Create a new function with Promise to capitalize string for existing tests

module.exports = { checkNumber };