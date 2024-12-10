const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test("Number to String Conversion", () => {
    let x = 10 + '20';
    let y = '20' + 10;
    let z = true + '10'

    logger.info(`Type of '${x}' is`, typeof x);
    logger.info(`Type of '${y}' is`, typeof y);
    logger.info(`Type of '${z}' is`, typeof z);
});

test("String to Number Conversion", () => {
    let a = 10 - '5';
    let b = 10 * '5';
    let c = 10 / '5';
    let d = 10 % '5';

    logger.info(`Type of '${a}' is`, typeof a);
    logger.info(`Type of '${b}' is`, typeof b);
    logger.info(`Type of '${c}' is`, typeof c);
    logger.info(`Type of '${d}' is`, typeof d);
});

test("Boolean to Number Conversion", () => {
    let e = true + 2;  // true becomes 1, addition happens
    let f = false + 2; // false becomes 0, addition happens

    logger.info(`Type of '${e}' is`, typeof e);
    logger.info(`Type of '${f}' is`, typeof f);
});

test("Coercion with Equality Operator", () => {
    let g = (10 == '10'); // "10" becomes 10, equality is true
    let h = (true == 1);  // true becomes 1, equality is true
    let i = (true == 'true'); // "true" becomes NaN, not equal to 1

    logger.info(`Type of '${g}' is`, typeof g);
    logger.info(`Type of '${h}' is`, typeof h);
    logger.info(`Type of '${i}' is`, typeof i);
});
