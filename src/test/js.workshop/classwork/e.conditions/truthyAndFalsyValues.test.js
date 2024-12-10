const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

// Function to check if a value is truthy or falsy
function checkFalsyOrTruthy(value) {
    return value ? `The ${value} is a truthy value!` : `The ${value} is a falsy value!`;
}

test("Check falsy values", () => {
    const falsyValues = [false, '', null, undefined, NaN, 0];

    falsyValues.forEach((value) => {
        const result = checkFalsyOrTruthy(value);
        expect(result).toBe(`The ${value} is a falsy value!`);
        logger.info(`The '${value}' is a falsy value!`);
    });
});

test("Check truthy values", () => {
    const truthyValues = [
        {name: 'shoes', price: 50, delivery: '3 days'}, // Object
        [1, 2, 3, 4, 5],                                // Array
        100                                             // Number
    ];

    truthyValues.forEach((value) => {
        const result = checkFalsyOrTruthy(value);
        expect(result).toBe(`The ${value} is a truthy value!`);
        logger.info(`The '${value}' is a truthy value!`);
    });
});

test("Check negated falsy values", () => {
    const falsyValues = [false, '', null, undefined, NaN, 0];

    falsyValues.forEach((value) => {
        const negatedValue = !value;
        const result = checkFalsyOrTruthy(negatedValue);
        expect(result).toBe(`The true is a truthy value!`); // Negated falsy values become true
        logger.info(`The true is a truthy value!`);
    });
});

