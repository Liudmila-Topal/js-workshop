const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test("Break a loop when counter reaches 4", () => {
    for (let i = 0; i <= 10; i++) {
        if (i === 4) {
            logger.info(`The loop stopped at ${i} iteration`);
            break; // Stops the loop
        }
        logger.info(i); // Logs numbers before 4
    }
});

test("Break a loop when counter reaches 5", () => {
    for (let i = 0; i <= 10; i++) {
        logger.info(i); // Logs all numbers before the break condition
        if (i === 5) {
            logger.info(`The loop stopped at ${i} iteration`);
            break; // Stops the loop
        }
    }
});

test("Break an inner loop and continue outer loop", () => {
    for (let i = 0; i <= 5; i++) {
        logger.info(`\n--- This is ${i} iteration of the outer loop ---\n`);
        for (let j = 0; j <= 5; j++) {
            if (j === 3) {
                logger.info(`The inner loop stopped at ${j} iteration`);
                break; // Stops only the inner loop
            }
            logger.info(`This is ${j} iteration of the inner loop`);
        }
    }
});