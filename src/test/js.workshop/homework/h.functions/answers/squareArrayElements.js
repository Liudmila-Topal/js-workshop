const squareArray = (arr) => {
    let result = [];
    arr.forEach(elem => {
        result.push(elem * elem);
    })
    return result;
}

console.log(squareArray([1, 2, 3])); // Output[1, 4, 9]
console.log(squareArray([1, -2, 0])); // Output[1, 4, 0]