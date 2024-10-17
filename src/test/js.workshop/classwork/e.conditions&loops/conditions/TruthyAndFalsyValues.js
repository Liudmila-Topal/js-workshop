// Example of truthy values
const product = {
    name: 'shoes',
    price: 50,
    delivery: '3 days'
}
const myArray = [1, 2, 3, 4, 5];

// List of falsy values
let falseBooleanValue = false;
let emptyString = '';
let nullValue = null;
let undefinedValue = undefined;
let notANumberValue = NaN;
let zeroValue = 0;

// The function below checks if a given value is in the truthy or falsy list.
function checkFalsyOrTruthy(value) {
    if (value) {
        console.log(`The ${value} is a truthy value!`)
    } else {
        console.log(`The ${value} is a falsy value!`)
    }
}

// Call the checkFalsyOrTruthy function with falsy parameters
console.log('\n--- Check falsy values ---\n')
checkFalsyOrTruthy(falseBooleanValue);
checkFalsyOrTruthy(emptyString);
checkFalsyOrTruthy(nullValue);
checkFalsyOrTruthy(undefinedValue);
checkFalsyOrTruthy(notANumberValue);
checkFalsyOrTruthy(zeroValue);

// Call the checkFalsyOrTruthy function with truthy parameters
console.log('\n--- Check truthy values ---\n')
checkFalsyOrTruthy(product);
checkFalsyOrTruthy(myArray);
checkFalsyOrTruthy(100);

// When a falsy value is negated, it becomes true value.
console.log('\n--- Check negated falsy values ---\n')
checkFalsyOrTruthy(!falseBooleanValue);
checkFalsyOrTruthy(!emptyString);
checkFalsyOrTruthy(!nullValue);
checkFalsyOrTruthy(!zeroValue);
checkFalsyOrTruthy(!notANumberValue);
