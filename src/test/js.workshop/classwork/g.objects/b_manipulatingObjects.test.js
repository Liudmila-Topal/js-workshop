const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test("Modify Object Properties", () => {
    const person = {
        name: "Bobby",
        hobby: "Dancing",
    };

    person.hobby = "Singing";
    person.rollNo = 14;
    person.faculty = "Science";
    logger.info(person);

    delete person.rollNo;
    logger.info(person);
});

test("Object Methods", () => {
    const car = {
        brand: "Tesla",
        model: "Model S",
        year: 2020,
    };

    const keys = Object.keys(car);
    const values = Object.values(car);
    const entries = Object.entries(car);

    logger.info(keys);
    logger.info(values);
    logger.info(entries);

    const additionalInfo = {
        year: 2020,
        color: "red",
    };

    const fullCar = Object.assign({}, car, additionalInfo);
    logger.info(fullCar);
});

test("freeze() and isFrozen()", () => {
    const car2 = {
        brand: "Tesla",
        model: "Model S",
    };

    Object.freeze(car2);
    car2.year = 2020; // This will not work
    logger.info(car2.year); // undefined
    logger.info(Object.isFrozen(car2)); // true
});

test("seal() and isSealed()", () => {
    const car3 = {
        brand: "Tesla",
        model: "Model S",
    };

    Object.seal(car3);
    car3.model = "ABC"; // This will work
    car3.year = 2020; // This will not work
    delete car3.model; // This will not work
    logger.info(car3);
    logger.info(Object.isSealed(car3));
});

test("defineProperty()", () => {
    const car4 = {};

    Object.defineProperty(car4, "brand", {
        value: "Tesla",
        writable: false,
        enumerable: true,
    });

    logger.info(car4.brand); // Tesla
    car4.brand = "Ford"; // This will not work
    logger.info(car4.brand); // Tesla
});

test("getOwnPropertyDescriptors() and hasOwnProperty()", () => {
    const car5 = {
        brand: "Tesla",
        model: "Model S",
    };

    const descriptors = Object.getOwnPropertyDescriptors(car5);
    logger.info(descriptors);

    const brand = car5.hasOwnProperty("brand");
    const model = car5.hasOwnProperty("model");
    const year = car5.hasOwnProperty("year");

    logger.info(`The car has 'brand' property: ${brand}`);
    logger.info(`The car has 'model' property: ${model}`);
    logger.info(`The car has 'year' property: ${year}`);
});

test("Object.is()", () => {
    logger.info(Object.is(25, 25));
    logger.info(Object.is(NaN, NaN));
    logger.info(Object.is(0, -0));
});

test("Object.fromEntries()", () => {
    const entries2 = [
        ["brand", "Tesla"],
        ["model", "Model S"],
        ["year", 2020],
    ];

    const car6 = Object.fromEntries(entries2);
    logger.info(car6);
});
