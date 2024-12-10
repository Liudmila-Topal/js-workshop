const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test("Object Literal Syntax", () => {
    const person = {
        name: "John",
        age: 30,
        greet: function() {
            logger.info("Hello, " + this.name);
        }
    };
    person.greet();
});

test("Using new Object() Constructor", () => {
    const person2 = new Object();
    person2.name = "Tom";
    person2.age = 30;
    person2.greet = function() {
        logger.info("Hello, " + this.name);
    };

    person2.greet();
});

test("Using a Constructor Function", () => {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.greet = function() {
            logger.info("Hello, " + this.name);
        };
    }

    const john = new Person("Valentin", 30);
    john.greet();
});

test("Using ES6 Classes", () => {
    class Person2 {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        greet() {
            logger.info("Hello, " + this.name);
        }
    }

    const tim = new Person2("Tim", 25);
    tim.greet();
});

test("Using Object.create()", () => {
    const personPrototype = {
        greet: function() {
            logger.info("Hello, " + this.name);
        }
    };

    const ann = Object.create(personPrototype);
    ann.name = "Ann";
    ann.age = 17;

    ann.greet();
});

test("Using Factory Functions", () => {
    function createPerson(name, age) {
        return {
            name: name,
            age: age,
            greet: function() {
                logger.info("Hello, " + this.name);
            }
        };
    }

    const olga = createPerson("Olga", 26);
    olga.greet();
});
