// Arrow function that takes two arguments and returns their sum
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8 (5 + 3)


const numbers = [1, 2, 3, 4];
// Using an arrow function as a callback to map each number to its square
const squares = numbers.map(num => num * num); // Arrow function with one parameter
console.log(squares); // Output: [1, 4, 9, 16]


// Arrow function used as the callback in setTimeout
setTimeout(() => {
    console.log("Arrow function used with setTimeout");
}, 1000); // Output: Arrow function used with setTimeout (after 1 second delay)
