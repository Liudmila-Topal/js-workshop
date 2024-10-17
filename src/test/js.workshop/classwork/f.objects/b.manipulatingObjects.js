/*
Example 1:
Modify Object Properties.
We can modify object properties by assigning a new value to an existing key, adding new value to object and deleting values.
 */

const person = {
    name: "Bobby",
    hobby: "Dancing",
};

// modify property
person.hobby = "Singing";

// add properties
person.rollNo = 14;
person.faculty = "Science";
console.log(person);

// delete object property
delete person.rollNo
console.log(person);

/*
Example 2:
Object methods.
 */
const car = {
    brand: "Tesla",
    model: "Model S",
    year: 2020
};

// Object.keys() - Get all property names (keys).
const keys = Object.keys(car);
console.log(keys);

// Object.values() - Get all property values.
const values = Object.values(car);
console.log(values);

// Object.entries() - Get key-value pairs.
const entries = Object.entries(car);
console.log(entries);

// Object.assign() - Merge two or more objects.
const additionalInfo = {
    year: 2020,
    color: "red"
};

const fullCar = Object.assign({}, car, additionalInfo);
console.log(fullCar);

/*
Example 3:
- freeze() - Freeze an object (prevent modification).
  This method freezes an object, making it immutable—no properties can be added, modified, or removed.

- isFrozen() - method in JavaScript checks if an object is frozen.
  A frozen object means that no properties can be added, deleted, or modified (including changing values or descriptors
  like writable). Essentially, the object and its properties become immutable.
 */
const car2 = {
    brand: "Tesla",
    model: "Model S"
};

Object.freeze(car2);

car2.year = 2020;  // This will not work because the object is frozen.
console.log(car2.year);

console.log(Object.isFrozen(car2));

/*
Example 4:
- seal() - Seal an object (prevent adding/removing properties).
  This method seals an object, allowing existing properties to be modified
  but preventing new properties from being added or existing properties from being removed.

- isSealed() - method in JavaScript checks if an object is sealed.
  An object is sealed when it is not extensible (i.e., no new properties can be added),
  and its existing properties cannot be deleted or reconfigured (but their values can still be changed).
 */
const car3 = {
    brand: "Tesla",
    model: "Model S"
};

Object.seal(car3);

car3.model = "ABC";  // This will work because we're modifying an existing property.
car3.year = 2020;  // This will not work.
delete car3.model;  // This will not work.
console.log(car3);

console.log(Object.isSealed(car3));

/*
Example 5:
defineProperty() - Define or modify a property
This method allows you to define or modify properties with more control, like setting attributes (writable, enumerable, etc.).
 */
const car4 = {};

Object.defineProperty(car4, "brand", {
    value: "Tesla",
    writable: false,  // prevents modification of the property
    enumerable: true  // makes the property show up during enumeration (e.g., Object.keys)
});

console.log(car4.brand);
car4.brand = "Ford";  // This will not work because writable is set to false
console.log(car4.brand);

/*
Example 6:
- getOwnPropertyDescriptors() - get descriptors of all properties.
  This method returns an object containing all the property descriptors for the object’s own properties.

- hasOwnProperty() - method in JavaScript checks if an object has a specific property as its own (not inherited).
  It returns true if the property exists directly on the object, otherwise false, making it useful for distinguishing
  own properties from inherited ones.
 */
const car5 = {
    brand: "Tesla",
    model: "Model S"
};

const descriptors = Object.getOwnPropertyDescriptors(car5);
console.log(descriptors);

const brand = car5.hasOwnProperty("brand");
const model = car5.hasOwnProperty("model");
const year = car5.hasOwnProperty("year");
console.log(`The car has 'brand' property: ${brand}`);
console.log(`The car has 'model' property: ${model}`);
console.log(`The car has 'year' property: ${year}`);

/*
Example 7:
Object.is() - Compare two values for strict equality.
This method compares if two values are the same.
It's more reliable than the '===' operator, particularly for special cases like 'NaN' and '-0'.
 */
console.log(Object.is(25, 25));
console.log(Object.is(NaN, NaN));
console.log(Object.is(0, -0));

/*
Example 8:
fromEntries() - Convert key-value pairs array into an object.
This method takes an array of key-value pairs and converts it into an object.
 */
const entries2 = [
    ['brand', 'Tesla'],
    ['model', 'Model S'],
    ['year', 2020]
];

const car6 = Object.fromEntries(entries2);
console.log(car6);