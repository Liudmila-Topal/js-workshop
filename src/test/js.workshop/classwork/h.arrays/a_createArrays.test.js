const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test("Array Literal Syntax", () => {
    const fruits = ["apple", "banana", "orange"];
    logger.info(fruits);
});

test("Array() Constructor with Initial Elements", () => {
    const numbers = Array(1, 2, 3, 4, 5);
    logger.info(numbers);
});

test("Array() Constructor with Length", () => {
    const emptyArray = Array(5);
    logger.info(emptyArray);
    logger.info(emptyArray.length);
});

test("Array.of()", () => {
    const arr1 = Array.of(10);
    const arr2 = Array.of(1, 2, 3);

    logger.info(arr1);
    logger.info(arr2);
});

test("Array.from() with a String", () => {
    const str = "hello";
    const charArray = Array.from(str);

    logger.info(charArray);
});

test("Array.from() with a Set", () => {
    const set = new Set([1, 2, 3]);
    const setArray = Array.from(set);

    logger.info(setArray);
});

test("Array.from() with Array-Like Object", () => {
    function createArray() {
        return Array.from(arguments);
    }

    const result = createArray(1, 2, 3);
    logger.info(result);
});

test("Array.fill()", () => {
    const filledArray = Array(5).fill(0);
    logger.info(filledArray);
});

test("new Array() Constructor with Elements", () => {
    const colors = new Array("red", "green", "blue");
    logger.info(colors);
});

test("new Array() Constructor with Length", () => {
    const largeArray = new Array(10);
    logger.info(largeArray);
    logger.info(largeArray.length);
});
