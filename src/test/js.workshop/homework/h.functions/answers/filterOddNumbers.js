const filterOddNumbers = (arr) => arr.filter(num => num % 2 !== 0);
/*
filterOddNumbers is an arrow function that takes an array arr as its argument.
filter iterates over each element (num) in the array,
keeping only those that satisfy the condition num % 2 !== 0 (which checks if the number is odd).
This returns a new array containing only the odd numbers.
 */
console.log(filterOddNumbers([1, 2, 3, 4, 5, 6])); // Output [1, 3, 5]
