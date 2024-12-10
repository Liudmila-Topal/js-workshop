const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test("Skip an iteration when counter reaches 4", () => {
    for (let i = 0; i <= 10; i++) {
        if (i === 4) {
            continue; // Skips this iteration
        }
        logger.info(i);
    }
});

test("Redundant continue statement at the end of the loop", () => {
    for (let i = 0; i <= 10; i++) {
        logger.info(i); // Logs all numbers from 0 to 10
        if (i === 4) {
            continue; // No effect as this is the last statement in the loop
        }
    }
});

test("Skip an iteration of the inner loop while continuing outer loop", () => {
    for (let i = 0; i <= 5; i++) {
        logger.info(`\n--- This is ${i} iteration of the outer loop ---\n`);
        for (let j = 0; j <= 5; j++) {
            if (j === 3) {
                continue; // Skips iteration when j === 3
            }
            logger.info(`This is ${j} iteration of the inner loop`);
        }
    }
});