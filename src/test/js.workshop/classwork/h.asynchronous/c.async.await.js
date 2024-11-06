/*
Example:
Using async with await in JavaScript.
 */

// Function to simulate fetching data asynchronously
function fetchData() {
    return new Promise((resolve, reject) => {
        console.log("Fetching data...");

        // Simulate a delay using setTimeout
        setTimeout(() => {
            const success = true; // Simulate success or failure
            if (success) {
                resolve({name: "Charlie", age: 35}); // Resolve the promise with data
            } else {
                reject("Error: Unable to fetch data"); // Reject the promise with an error
            }
        }, 2000); // Simulate 2 seconds delay
    });
}

// Async function using await without any error handling
async function handleData() {
    // Await the resolution of the fetchData promise
    const data = await fetchData();
    // Process the fetched data
    console.log(`Data received: Name is ${data.name}, Age is ${data.age}`);
}

// Call the async function
handleData();

/*
Explanation:
fetchData Function:
 - This function returns a promise that simulates an asynchronous task (fetching data).
 - After a 2-second delay, the promise is either resolved with data (if success = true) or rejected with an error (if success = false).

handleData Async Function:
 - The function uses 'await' to pause execution until 'fetchData()' resolves and then processes the returned data.
 - There is no error handling inside this function (i.e., no try...catch or .catch()).

Execution Flow:
 - When 'fetchData()' is called, "Fetching data..." is logged immediately.
 - After the 2-second delay:
   - If the promise is 'resolved', the data is printed: "Data received: Name is Charlie, Age is 35".
   - If the promise is 'rejected', there is no mechanism to catch or handle the error, resulting in an unhandled promise rejection.
 */
