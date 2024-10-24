/*
Exercise 1:
Simple Promise that Resolves.
Create a simple Promise that resolves after N seconds with the message "Operation Successful".
Log the message when the promise resolves.

Expected Output:
Waiting...
Operation Successful

 */

// Create a Promise that resolves after N seconds
function simplePromise(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Operation Successful");
        }, time); // N-second delay
    });
}

// Call the promise and handle the resolution
console.log("Waiting...");
simplePromise(10000).then((message) => {
    console.log(message);
});

/*
Example 2:
Fetching Data with Promise.
Simulate fetching data using a Promise.
The Promise should resolve with some data (e.g., user information) after an N-second delay, or reject if an error occurs.

Expected Output:
Fetching data...
Data fetched: { name: "Alice", age: 25 }
 */

// Simulate a data fetching Promise
function fetchData(time) {
    return new Promise((resolve, reject) => {
        console.log("Fetching data...");

        setTimeout(() => {
            const success = true; // Simulate success or failure
            if (success) {
                resolve({name: "Alice", age: 25}); // Resolve with data
            } else {
                reject("Error: Unable to fetch data"); // Reject with an error
            }
        }, time); // N-second delay
    });
}

// Call the fetchData function and handle success or failure
fetchData(3000)
    .then((data) => {
        console.log("Data fetched:", data);
    })
    .catch((error) => {
        console.log(error);
    });

/*
Exercise 3:
Sequential Promises (Chaining).
Simulate a process where multiple asynchronous tasks need to be executed one after another (e.g., multiple API calls).
Chain multiple promises so that each one starts only after the previous one completes.

Expected Output:
Starting task 1...
Task 1 completed
Starting task 2...
Task 2 completed
Starting task 3...
Task 3 completed
All tasks done!
 */

// Simulate asynchronous tasks using promises
function task1() {
    return new Promise((resolve) => {
        console.log("Starting task 1...");
        setTimeout(() => {
            console.log("Task 1 completed");
            resolve();
        }, 1000); // 1-second delay
    });
}

function task2() {
    return new Promise((resolve) => {
        console.log("Starting task 2...");
        setTimeout(() => {
            console.log("Task 2 completed");
            resolve();
        }, 2000); // 2-second delay
    });
}

function task3() {
    return new Promise((resolve) => {
        console.log("Starting task 3...");
        setTimeout(() => {
            console.log("Task 3 completed");
            resolve();
        }, 1500); // 1.5-second delay
    });
}

// Chain the promises to run the tasks sequentially
task1()
    .then(() => task2())
    .then(() => task3())
    .then(() => {
        console.log("All tasks done!");
    });