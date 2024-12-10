// This is a pure function which adds 2 numbers
function add(num, pad) {
    return num + pad;
}

// This is a pure function that subtracts 2 numbers
function sub(num, pad) {
    return num - pad;
}

// This is a pure function that multiply 2 numbers
function mul(num, pad) {
    return num * pad;
}

/*
The function smartOperation takes three arguments:
    - arr: An array of numbers to iterate over.
    - operation: A function (callback) that will be applied to each element
      in the array if it meets a specific condition.
    - pad: An additional value that will be passed as an argument to the
      operation function when it is called.
The function filters out only the even numbers from arr and applies the
operation function to each of them, along with the pad value.
 */
function smartOperation(arr, operation, pad) {
    let result = [];
    for (const elem of arr) {
        if (elem % 2 === 0) {
            result.push(operation(elem, pad));
        }
    }
    return result;
}


const arr = [1, 2, 3, 4];

//Calling smartOperation higher-order function with different operation as a parameter
console.log(smartOperation(arr, add, 5));
console.log(smartOperation(arr, mul, 5));