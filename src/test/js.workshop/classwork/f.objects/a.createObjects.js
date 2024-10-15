/*
Example 1:
Object Literal Syntax.
This is the simplest and most common way to create an object.
 */
const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

person.greet();

/*
Example 2:
Using new Object() Constructor.
You can create an object using the Object constructor.
 */
const person2 = new Object();
person2.name = "Tom";
person2.age = 30;
person2.greet = function() {
    console.log("Hello, " + this.name);
};

person2.greet();

/*
Example 3:
Using a Constructor Function.
In older JavaScript, you could create objects using a constructor function.
 */
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello, " + this.name);
    };
}

const john = new Person("Valentin", 30);
john.greet();

/*
Example 4:
Using ES6 Classes.
With ES6, JavaScript introduced classes, which make working with objects more intuitive.
 */
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello, " + this.name);
    }
}

const tim = new Person2("Tim", 25);
tim.greet();

/*
Example 5:
Using Object.create().
The Object.create() method creates a new object, using an existing object as the prototype.
 */
const personPrototype = {
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

const ann = Object.create(personPrototype);
ann.name = "Ann";
ann.age = 17;

ann.greet();

/*
Example 6:
Using Factory Functions.
Factory functions are another way to create objects without using classes or constructor functions.
 */
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            console.log("Hello, " + this.name);
        }
    };
}

const olga = createPerson("Olga", 26);
olga.greet();