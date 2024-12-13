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
function reverseStringWithPromise(input) {
    return new Promise((resolve, reject) => {
        if (typeof input !== 'string') {
            reject('Input must be a string');
        } else {
            const reversed = input.split('').reverse().join('');
            resolve(reversed);
        }
    });
}

// TODO: Create a new function with Promise to capitalize string for existing tests
function capitalizeStringWithPromise(input) {
    return new Promise((resolve, reject) => {
        if (typeof input !== 'string') {
            reject('Input must be a string');
        } else {
            const capitalized = input.toUpperCase();
            resolve(capitalized);
        }
    });
}

module.exports = { checkNumber };