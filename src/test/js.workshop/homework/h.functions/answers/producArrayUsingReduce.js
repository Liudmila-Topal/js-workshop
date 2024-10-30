const productArray = (arr) => arr.reduce((acc, num) => acc * num, 1);

console.log(productArray([1, 2, 3, -4])); // Output -24