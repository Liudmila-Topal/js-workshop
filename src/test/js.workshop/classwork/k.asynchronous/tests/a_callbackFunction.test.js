const {processTasks, orderPizza} = require('../utils/a_callbackFunction');

const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test('should process each task and call the callback with the processed task', () => {
    const tasks = ['Task 1', 'Task 2', 'Task 3'];
    const results = [];

    // Define the callback function
    const callback = (processedTask) => {
        // processedTask: represents the processed result of a task
        results.push(processedTask);
    };

    // Call the function
    processTasks(tasks, callback);

    // Assert results
    expect(results).toEqual([
        'Processed: Task 1',
        'Processed: Task 2',
        'Processed: Task 3',
    ]);
});

test('should not call the callback if the task list is empty', () => {
    const tasks = [];
    let callbackCalled = false;

    // Define the callback
    const callback = () => {
        callbackCalled = true;
    };

    // Call the function
    processTasks(tasks, callback);

    // Assert that the callback was not called
    expect(callbackCalled).toBe(false);
});

test('should handle tasks with different data types gracefully', () => {
    const tasks = [1, true, {id: 1}];
    const results = [];

    // Define the callback
    const callback = (processedTask) => {
        results.push(processedTask);
    };

    // Call the function
    processTasks(tasks, callback);

    // Assert results
    expect(results).toEqual([
        'Processed: 1',
        'Processed: true',
        'Processed: [object Object]',
    ]);
});