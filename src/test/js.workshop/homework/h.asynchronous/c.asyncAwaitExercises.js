/*
Exercise 1:
Simple Async Function.
Create an asynchronous function that waits for 2 seconds and then logs "Task completed!" using 'async' and 'await'.

Expected Output:
Waiting...
Task completed!
 */

// Create a function that returns a promise resolving after 2 seconds
function waitTwoSeconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task completed!");
        }, 2000); // 2-second delay
    });
}

// Use async/await to wait for the promise to resolve
async function performTask() {
    console.log("Waiting...");
    const message = await waitTwoSeconds();
    console.log(message);
}

// Call the async function
performTask();

/*
Exercise 2:
Fetching Data with Async/Await.
Simulate fetching user data asynchronously.
Use 'async' and 'await' to wait for the data to be fetched, then log the user information.

Expected Output:
Fetching data...
Data fetched: { name: "Tim", age: 67 }
 */

// Simulate an asynchronous data fetch with a promise
function fetchData() {
    return new Promise((resolve) => {
        console.log("Fetching data...");
        setTimeout(() => {
            resolve({name: "Tim", age: 67});
        }, 3000); // 3-second delay
    });
}

// Use async/await to fetch the data and log the result
async function getUserData() {
    const data = await fetchData();
    console.log("Data fetched:", data);
}

// Call the async function to fetch data
getUserData();

/*
Example 3:
Sequential Async Tasks with Delays.
Create three asynchronous tasks that must be executed in sequence.
Each task should log a message after a certain delay.
Use 'async' and 'await' to ensure the tasks run one after the other, with different delays for each.

Expected Output:
Task 1 started...
Task 1 completed
Task 2 started...
Task 2 completed
Task 3 started...
Task 3 completed
All tasks done!
 */

// Simulate an asynchronous task with a promise
function task(name, delay) {
    return new Promise((resolve) => {
        console.log(`${name} started...`);
        setTimeout(() => {
            console.log(`${name} completed`);
            resolve();
        }, delay);
    });
}

// Use async/await to run the tasks sequentially
async function runTasks() {
    await task("Task 1", 1000);  // Wait for Task 1 to complete
    await task("Task 2", 2000);  // Wait for Task 2 to complete
    await task("Task 3", 1500);  // Wait for Task 3 to complete
    console.log("All tasks done!");
}

// Start the sequence of tasks
runTasks();