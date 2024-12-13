/*
Example 1:
Using a Callback Function with 'setTimeout' in JavaScript.
 */

// Function to simulate fetching data (asynchronous task)
function fetchData(callback) {
    console.log("Fetching data...");

    // Simulate a delay (e.g., fetching from an API) using setTimeout
    setTimeout(() => {
        const data = {name: "John", age: 25}; // Simulated data
        console.log("Data fetched");

        // Execute the callback, passing the data to it
        callback(data);
    }, 2000); // Simulating 2 seconds delay
}

// Function to process the data (the callback function)
function processData(data) {
    console.log(`Processing data: Name is ${data.name}, Age is ${data.age}`);
}

// Call fetchData, passing processData as the callback
fetchData(processData);
/*
Explanation:
fetchData Function:
 - Simulates fetching data by using 'setTimeout', which introduces a 2-second delay to mimic an asynchronous operation.
 - Once the delay is over, the data object (simulating fetched data) is created.
 - After the data is ready, it calls the 'callback' function, passing the fetched data to it.
processData Function (Callback):
 - This function is passed as the callback to fetchData.
 - It takes the data object as an argument and processes it by printing a message.
Execution Flow:
 - fetchData is called first and immediately logs "Fetching data...".
 - After a 2-second delay, it logs "Data fetched" and calls processData with the fetched data.
 - processData then logs the processed message: "Processing data: Name is John, Age is 25".
 */

/*
Example 2:
Using a Callback Function with 'setInterval' in JavaScript.
 */

// Function to start the countdown with a callback
function startCountdown(seconds, callback) {
    console.log(`Starting countdown from ${seconds} seconds...`);

    // Create an interval to count down every second
    const intervalId = setInterval(() => {
        console.log(seconds);  // Print the current count

        // Check if the countdown has reached 0
        if (seconds === 0) {
            clearInterval(intervalId); // Stop the interval
            callback(); // Call the callback function
        } else {
            seconds--; // Decrease the countdown by 1
        }
    }, 1000); // Interval of 1 second (1000ms)
}

// Callback function to display a message when countdown finishes
function timeUp() {
    console.log("Time's up!");
}

// Start the countdown from 5 seconds and pass timeUp as the callback
startCountdown(5, timeUp);
/*
Explanation:
startCountdown Function:
 - This function takes two arguments:
      - seconds: The starting number of seconds for the countdown.
      - callback: A callback function to be executed when the countdown reaches 0.
 - It uses 'setInterval' to repeatedly execute a block of code every second (1000 milliseconds).
 - Inside the 'setInterval', we print the current number of seconds (console.log(seconds)).
 - After each second, the countdown decreases by 1 (seconds--).
Stopping the Timer:
 - When the countdown reaches 0, we call 'clearInterval'(intervalId) to stop the interval from running.
 - We then execute the callback function 'callback()', which will be the timeUp function.
timeUp Function (Callback):
 - This function is passed as the callback to 'startCountdown'.
 - When called, it simply logs the message "Time's up!" to indicate that the countdown is over.
Execution Flow:
 - The countdown starts at 5 and logs each second (5, 4, 3, 2, 1, 0).
 - When the countdown reaches 0, the interval stops, and the 'timeUp' callback is called, which logs "Time's up!".
 */

/*
Example 3:
 */
let students = [{
    name: "Harry potter",
    house: "Gryffindor"
}, {
    name: "Draco Malfoy",
    house: "Slytherin"
}];

let newStudent = {
    name: "Cedric Diggory",
    house: "Hufflepuff"
};

//TimeOut is added to have some delay
const addCharacter = (character, callback) => {
    setTimeout(() => {
        students.push(character);
        callback(students);
    }, 1000);
}

const getListOfSortedStudents = (list) => {
    list.forEach((student, index) => {
        console.log(`${index + 1}. ${student.name} is added to ${student.house}`);
    })
};

addCharacter(newStudent, getListOfSortedStudents);
/*
Explanation:
 - The 'students' array initially contains two objects representing 'Harry Potter' and 'Draco Malfoy'.
 - The 'newStudent' object representing 'Cedric Diggory' is created.
 - The 'addCharacter' function is called with 'newStudent' and the 'getListOfSortedStudents' callback.
   It adds 'newStudent' to the 'students' array using 'setTimeout' with a delay of 1000 milliseconds (1 second).
 - Meanwhile, the 'getListOfSortedStudents' function is not directly called in the main code; instead, it is passed as a callback to 'addCharacter'.
 - After the delay of 1000 milliseconds, the callback inside 'setTimeout' is executed.
   It adds 'newStudent' to the students array and then calls the provided callback (getListOfSortedStudents) with the updated 'students' array.
 - The 'getListOfSortedStudents' function is called with the updated students array, and it prints all three students to the console.
 */