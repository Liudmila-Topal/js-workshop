const sumArray = (arr) => {
    let result = 0;
    arr.forEach(elem => {
        result += elem;
    })
    return result;
}

/*
sumArray is an arrow function that takes arr as an argument.
Inside the function, result is initialized to 0.
forEach iterates over each element in the array, adding each elem to result.
Finally, the function returns the total sum.
 */

console.log(sumArray([2, 4, 5])); //Output 11
console.log(sumArray([-1, -4, 5])); //Output 0