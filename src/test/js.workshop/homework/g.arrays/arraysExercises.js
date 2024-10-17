/*
Exercise 1:
Flatten and Sum a Deeply Nested Array:
- Create an array with values [1, [2, [3, 4], [5, [6, 7]]], 8].
- Flatten the array into a single-level array.
- Calculate the sum of all the numbers.
 */
const nestedArray = [1, [2, [3, 4], [5, [6, 7]]], 8];

const flattenAndSum = (arr) => {
    // Step 1: Flatten the array
    const flattened = arr.flat(Infinity); // flat(Infinity) flattens to any depth

    // Step 2: Sum the array using reduce
    const sum = flattened.reduce((acc, num) => acc + num, 0);

    return sum;
};

console.log("Sum:", flattenAndSum(nestedArray));

/*
Exercise 2:
Group and Count Array Items:
- Create an array 'fruits' with values 'apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple'.
- Count how many times each fruit appears in the array.
- Return an object with the fruit names as keys and the counts as values.
 */
const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple'];

const countFruits = (arr) => {
    return arr.reduce((acc, fruit) => {
        acc[fruit] = (acc[fruit] || 0) + 1; // Increment count or initialize to 1 if not present
        return acc;
    }, {});
};

console.log(countFruits(fruits));

/*
Exercise 3:
Find the Longest Word in an Array:
- Create an array with values 'cat', 'elephant', 'tiger', 'giraffe', 'zebra'.
- Find the longest word in the array.
- If multiple words have the same length, return the first one that appears.
 */
const words = ['cat', 'elephant', 'tiger', 'giraffe', 'zebra'];

const findLongestWord = (arr) => {
    return arr.reduce((longest, currentWord) => {
        return currentWord.length > longest.length ? currentWord : longest;
    }, "");
};

console.log("Longest word:", findLongestWord(words));

/*
Exercise 4:
Sort Array of Objects by Multiple Criteria:
- Create an array with objects.
- Each Object should have keys: name, price, rating).
- Sort the objects by price in descending order.
- If two objects have the same price, sort by rating in descending order.
 */
const products = [
    { name: 'Laptop', price: 1000, rating: 4.5 },
    { name: 'Phone', price: 600, rating: 4.8 },
    { name: 'Tablet', price: 1000, rating: 4.2 },
    { name: 'Monitor', price: 200, rating: 4.9 }
];

const sortProducts = (arr) => {
    return arr.sort((a, b) => {
        // First compare by price in descending order
        if (b.price !== a.price) {
            return b.price - a.price;
        }
        // If prices are the same, compare by rating in descending order
        return b.rating - a.rating;
    });
};

console.log(sortProducts(products));