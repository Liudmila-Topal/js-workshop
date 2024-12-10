const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test("Postfix decrement operator", () => {
    let x = 10;

    // Postfix decrement: value is returned before decrementing
    logger.info(x--);
    logger.info(x);
});

test("Prefix decrement operator", () => {
    let a = 10;

    // Prefix decrement: value is decremented before being returned
    logger.info(--a);
    logger.info(a);
});
