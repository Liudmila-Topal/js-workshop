/*
Exercise 1:
Calculator with Callback.

Create a simple calculator function that takes two numbers and a callback function to perform an operation:
 - addition
 - subtraction
 - multiplication
 - division on the numbers.
The callback will decide which operation to apply.

Expected Output:
10 + 5 = 15
10 - 5 = 5
10 * 5 = 50
10 / 2 = 2
 */

// Calculator function
function calculator(num1, num2, operationCallback) {
    const result = operationCallback(num1, num2);
    console.log(`Result of ${operationCallback.name} operation is: ${result}`);
}

// Callback for addition
function add(a, b) {
    return a + b;
}

// Callback for subtraction
function subtract(a, b) {
    return a - b;
}

// Callback for multiplication
function multiplication(a, b) {
    return a * b;
}

// Callback for divide
function divide(a, b) {
    return a / b;
}

// Example usage
calculator(10, 5, add);               // Output: 15
calculator(10, 5, subtract);          // Output: 5
calculator(10, 5, multiplication);    // Output: 50
calculator(10, 5, divide);            // Output: 2

/*
Exercise 2:
Counting with setInterval and Callback.

Create a function that takes a number n and a callback.
The function will count from 1 to n at 1-second intervals.
When the count reaches n (can use clearInterval() function), it should call the callback function.

Expected Output:
1
2
3
...
n
Done counting!
 */
function countToN(n, callback) {
    let count = 1;

    // Set up the interval to count every 1 second
    const intervalId = setInterval(() => {
        console.log(count);

        if (count === n) {
            clearInterval(intervalId); // Stop the interval once we reach 'n'
            callback(); // Call the callback function
        }

        count++;
    }, 1000); // 1-second delay
}

// Callback to be executed after counting finishes
function finishedCounting() {
    console.log("Done counting!");
}

// Call the function to count from 1 to 5
countToN(5, finishedCounting);

/*
Exercise 3:
Fetching Data with Simulated Delay.
Create a function that simulates fetching data.
It should take time and a callback that will handle the result once the "data" is retrieved after a delay.

Expected Output:
Fetching data...
Data fetched: { name: "Alex", age: 17 }
 */

// Simulate fetching data with delay using setTimeout
function fetchData(time, callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        const data = {name: "Alex", age: 17};
        callback(data);  // Call the callback with the fetched data
    }, time);  // Simulate  delay
}

// Callback to handle the fetched data
function handleData(data) {
    console.log(`Data fetched: ${JSON.stringify(data)}`);
}

// Example usage
fetchData(10000, handleData);