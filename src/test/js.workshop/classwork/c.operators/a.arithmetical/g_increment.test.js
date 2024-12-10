const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test("Postfix increment operator", () => {
    let x = 10;

    // Postfix increment: value is returned before incrementing
    logger.info(x++);
    logger.info(x);
});

test("Prefix increment operator", () => {
    let a = 10;

    // Prefix increment: value is incremented before being returned
    logger.info(++a);
    logger.info(a);
});
