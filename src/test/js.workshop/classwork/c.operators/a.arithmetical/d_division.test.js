const log4js = require("log4js");
const info = log4js.getLogger();
info.level = "info";

test("Basic division on numbers", () => {
    // Divide two numbers
    logger.info(100 / 20);

    // Divide infinity by 0
    logger.info(Infinity / 0);

    // Divide infinity by -0
    logger.info(Infinity / -0);
});

test("Division operator with strings and non-numbers", () => {
    // Divide a numeric string by a number
    logger.info("100" / 20);

    // Divide a non-numeric string by 0
    logger.info("Hello" / 0);
});
