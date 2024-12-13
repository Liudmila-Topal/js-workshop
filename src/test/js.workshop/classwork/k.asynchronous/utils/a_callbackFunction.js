const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

/*
 The function is named processTasks and accepts two parameters:
 tasks (an array) and callback (a function).
 */
function processTasks(tasks, callback) {
    /*
    The 'forEach' method is used to iterate over the 'tasks' array.
    For each element in the 'tasks' array, the current element is assigned to the 'task' variable.
     */
    tasks.forEach(task => {
        /*
         Simulate task processing.
         Inside the loop, a variable result is created to store the processed output for the current task.
         */
        const result = `Processed: ${task}`;
        // The 'callback' function allows the caller of 'processTasks' to define what to do with each processed 'result'.
        callback(result);
    });
}

// TODO: Create a new function
/*
  1. The orderPizza function takes three parameters:
     - type: The type of pizza (e.g., "Margherita", "Pepperoni").
     - name: The specific name of the pizza (e.g., "Classic", "Spicy").
     - callback: A function that can be passed as an argument to handle the notification
       when the pizza is ready. This parameter is optional, meaning if a callback is not
       provided, a default message will be logged instead.
  2. Add order Confirmation log: `Pizza ${type} ${name} is ordered`
  3. Simulated Pizza Preparation (setTimeout): Simulates a delay (3 seconds) using
    setTimeout to represent the time it takes to prepare the pizza.
  4. Add pizza Ready Message: `pizza ${type} ${name} is ready
  5. Callback or Default Action:
     - If a callback function is provided: Executes the callback function, passing a
       message prefixed with "Dear customer, ".
       The caller defines what the callback does with this message.
     - If no callback is provided: Logs a message prefixed with "Delivery guy, " as
       the default action.
 */

// TODO: In test create a callback function notifyMe() with parameter msg
// A simple function designed to handle the message passed by the orderPizza function's callback

// TODO: Call the orderPizza function with parameters

module.exports = {processTasks};