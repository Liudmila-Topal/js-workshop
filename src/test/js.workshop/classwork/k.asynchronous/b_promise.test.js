const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test("Using Promises in JavaScript", (done) => {
    // Function that returns a promise to simulate data fetching
    function fetchData() {
        return new Promise((resolve, reject) => {
            logger.info("Fetching data...")

            // Simulate an asynchronous operation with setTimeout
            setTimeout(() => {
                const success = true; // Simulating success/failure
                if (success) {
                    const data = { name: "John", age: 25 }; // Simulated data
                    resolve(data); // If successful, resolve the promise with the data
                } else {
                    reject("Error: Failed to fetch data"); // If failed, reject the promise
                }
            }, 2000); // Simulate a 2-second delay
        });
    }

    // Function to handle the successful data fetch
    function processData(data) {
        logger.info(`Processing data: Name is ${data.name}, Age is ${data.age}`)
        done(); // Mark the test as done after the data is processed
    }

    // Call fetchData and handle the promise using then() and catch()
    fetchData()
        .then((data) => {
            processData(data); // Called when promise is resolved (success)
        })
        .catch((error) => {
            console.log(error); // Called when promise is rejected (error)
        });
});
/*
Explanation:

fetchData Function:
 - This function returns a new 'Promise', which simulates an asynchronous task like fetching data from an API.
 - The promise takes two arguments: 'resolve' (called when the task is successful) and 'reject' (called when the task fails).
 - Inside the promise, 'setTimeout' is used to simulate a delay of 2 seconds.
 - After the delay, the variable success is checked:
   - If success is 'true', we call resolve(data) to mark the promise as 'fulfilled' with the simulated data.
   - If success is 'false', we call reject(error) to mark the promise as 'rejected' with an error message.

then() Method:
 - This method is used to handle the promise when it is resolved (i.e., when the asynchronous task is successful).
 - It takes a 'callback' function that receives the resolved value (data in this case) and processes it using processData.

catch() Method:
 - This method is used to handle errors in case the promise is rejected.
 - If the promise is rejected (i.e., the task fails), the catch() block catches the error and prints it.

Execution Flow:
 - The fetchData function is called, logging "Fetching data..." to the console.
 - After a 2-second delay, if the operation is successful (success = true), the promise is resolved, and then() is triggered to process and log the data.
 - If the operation fails (success = false), the promise is rejected, and catch() logs the error message.
 */

test("Adding a new student using Promises", (done) => {
    let students = [
        { name: "Harry Potter", house: "Gryffindor" },
        { name: "Draco Malfoy", house: "Slytherin" },
    ];

    let newStudent = {
        name: "Cedric Diggory",
        house: "Hufflepuff",
    };

    // Function to add a student and return a promise
    const addCharacter = (character) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    students.push(character);
                    resolve(students); // Resolve the promise with the updated students array
                } catch (e) {
                    reject(e); // Reject the promise in case of an error
                }
            }, 1000); // Simulate a delay
        });
    };

    // Function to print the sorted student list
    const getListOfSortedStudents = (list) => {
        expect(list).toHaveLength(3); // Ensure the list has 3 students
        list.forEach((student, index) => {
            expect(student).toHaveProperty("name");
            expect(student).toHaveProperty("house");
            logger.info(`${index + 1}. ${student.name} is added to ${student.house}`)
        });
        done(); // Mark the test as done
    };

    addCharacter(newStudent)
        .then((listOfStudents) => {
            getListOfSortedStudents(listOfStudents);
        })
        .catch((error) => {
            console.log("Error", error);
        });
});
/*
Explanation:

 - The 'addCharacter' function is modified to return a Promise.
   The 'asynchronous' operation (adding a character to the students array) is wrapped inside the Promise constructor.
   If the operation is 'successful', it resolves with the updated students array; if an error occurs, it 'rejects' with the error.
 - The 'addCharacter(newStudent)' returns a Promise, and the '.then()' method is used to handle the resolved value (success) and rejected value (error).
 - If the Promise is 'resolved', the success callback is executed, which calls 'getListOfSortedStudents' with the updated list of students.
 - If the Promise is 'rejected', the error callback is executed, logging the error message.
 */