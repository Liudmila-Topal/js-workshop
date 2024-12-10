const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";


test("Variable declaration using const", () => {
    const firstText = "Hello learners";
    logger.info(`Variable '${firstText}' was declared`);

    const firstNumber = 400;
    logger.info(`Variable '${firstNumber}' was declared`);

    const firstBoolean = true;
    logger.info(`Variable '${firstBoolean}' was declared`);
});

test("Const cannot be reassigned", () => {
    const a = 12;
    logger.info(`Variable '${a}' was declared`);

    // a = 13; // Uncomment to see an error
    // a += 1; // Uncomment to see an error

});

test("Block scope of const", () => {
    const a = 22;
    logger.info(`Global variable 'a' with value '${a}' was declared`);
    {
        const a = 90;
        logger.info(`First local variable 'a' with value '${a}' was declared`);

        {
            const a = 77;
            logger.info(`Second local variable 'a' with value '${a}' was declared`);
        }

        {
            const a = 45;
            logger.info(`Third local variable 'a' with value '${a}' was declared`);
        }
    }

    logger.info(`Global variable 'a' with value '${a}' remains unchanged`);
});

test("Const variables must be assigned immediately", () => {
    // const b; // Uncomment to see an error
    // b = 12;  // Uncomment to see an error
});

test("Const variables cannot be hoisted", () => {
    // c = 3;        // Uncomment to see an error
    // console.log(c); // Uncomment to see an error
    // const c;       // Uncomment to see an error
});

test("Const in arrays allows modification of elements, not reference", () => {
    const authors = ["King", "Tolkien", "Tolstoy", "Saint-Exupéry"];
    logger.info(`Original array is: ${authors}`);

    authors[2] = "Rowling"; // Modifying content is allowed
    logger.info(`Changed array is: ${authors}`);
});

// Example 7: Const in objects
test("Const in objects allows modification of properties, not reference", () => {
    const person = {
        first_name: "Tim",
        last_name: "Burton",
        Age: 66,
        About: "American animator, director, producer, writer and illustrator",
    };

    logger.info(`Original object is: ${person}`);

    // Modifying properties is allowed
    person.first_name = "Stephen";
    person.last_name = "King";
    person.Age = 77;
    person.About = "American author";

    logger.info(`Changed object is: ${person}`);

    // Reassigning the object itself is not allowed
    // Uncomment to see an error
    // const person = {
    //     "first_name": "Stephen",
    //     "last_name": "King",
    //     "Age": 77,
    //     "About": "American author"
    // }
});
