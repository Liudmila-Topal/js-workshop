const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test("Equality operator on the same data types", () => {
    let a = 1;
    let b = 1;
    let c = String("Hello");
    let d = String("Hello");
    let e = "Hello";

    logger.info(a == b);
    logger.info(c == d);
    logger.info(c == e);
});

test("Equality operator on different data types", () => {
    let f = 1;
    let g = "1";
    let h = true;

    logger.info(f == g);
    logger.info(g == h);
    logger.info(f == h);
});

test("Equality operator with Date and String", () => {
    let i = new Date();
    let j = i.toString();

    logger.info(i == j);
});
