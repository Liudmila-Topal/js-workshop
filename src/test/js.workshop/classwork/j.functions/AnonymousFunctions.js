const numbers = [1, 2, 3, 4];
// The map method expects a function; here we pass an anonymous function
const doubled = numbers.map(function(number) {
    return number * 2; // Multiplies each element in the array by 2
});
console.log(doubled); // Output: [2, 4, 6, 8]


// setTimeout expects a function to call after a delay; here, we pass an anonymous function
setTimeout(function() {
    console.log("This message appears after 2 seconds.");
}, 2000); // Output: This message appears after 2 seconds
