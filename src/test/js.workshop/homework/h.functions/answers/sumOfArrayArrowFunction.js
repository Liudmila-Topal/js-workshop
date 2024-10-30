const sumArray = (arr) => {
    let result = 0;
    arr.forEach(elem => {
        result += elem;
    })
    return result;
}

console.log(sumArray([2, 4, 5])); //Output 11
console.log(sumArray([-1, -4, 5])); //Output 0