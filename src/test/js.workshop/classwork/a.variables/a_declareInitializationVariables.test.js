const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

// Global variables
let Name = "Apple";

function MyFunction() {
    // Local variable
    let num = 45;

    logger.log("Global variable (Name):", Name);
    logger.log("Local variable (num):", num);
}

test("Global variable should have the correct value", () => {
    logger.log("Testing global variable:");
    logger.log("Expected:", "Apple");
    logger.log("Actual:", Name);
});

test("Local variable inside MyFunction should have the correct value", () => {
    logger.log("Testing local variable inside function:");
    MyFunction();
});