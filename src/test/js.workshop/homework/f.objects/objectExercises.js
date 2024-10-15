/*
Exercise 1:
Object Deep Freeze.
- Create a function 'deepFreeze(obj)' that freezes not only the object but also any objects nested inside it
  (making the entire object structure immutable).
- You should use 'Object.freeze()' but ensure that it applies to all levels of nested objects.

Requirements:
- Use recursion to traverse all properties of the object.
- Ensure all nested objects are also frozen.
 */
function deepFreeze(obj) {
    // Retrieve property names defined on the object
    const propNames = Object.getOwnPropertyNames(obj);

    // Freeze properties before freezing the object itself
    for (const name of propNames) {
        const value = obj[name];

        // If the property is an object, freeze it recursively
        if ((typeof value === "object") && (value !== null)) {
            deepFreeze(value);
        }
    }

    return Object.freeze(obj);
}

// Test object with nested properties
const person = {
    name: "John",
    address: {
        city: "New York",
        zip: 10001
    }
};

// Deep freeze the object
deepFreeze(person);

// Attempting to modify the object should fail
person.address.city = "Los Angeles";  // This should not work
console.log(person.address.city);  // Output: New York

/*
Exercise 2:
Compare Objects by Properties.
- Create a function 'compareObjects(obj1, obj2, properties)' that takes two objects and an array of property names.
- The function should return 'true' if both objects have the same values for all properties in the list, and 'false' otherwise.
- It should work for both primitive values and nested objects (deep comparison).

Requirements:
- Handle both primitive values and objects within the specified properties.
- Perform deep comparison for nested objects using recursion.
- Use 'Object.keys()', 'Object.entries()', and recursion where appropriate.
 */
function compareObjects(obj1, obj2, properties) {
    function deepEqual(val1, val2) {
        if ((typeof val1 === 'object') && (val1 !== null) && (typeof val2 === 'object') && (val2 !== null)) {
            return compareObjects(val1, val2, Object.keys(val1));
        }
        return val1 === val2;
    }

    for (const prop of properties) {
        if (!deepEqual(obj1[prop], obj2[prop])) {
            return false;
        }
    }
    return true;
}

// Test objects
const person1 = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: 10001
    }
};

const person2 = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: 10001
    }
};

// Compare by properties including a deep check for 'address'
console.log(compareObjects(person1, person2, ['name', 'age', 'address']));  // Output: true
console.log(compareObjects(person1, person2, ['name', 'age']));  // Output: true

// Change a nested property
person2.address.city = "Los Angeles";
console.log(compareObjects(person1, person2, ['name', 'address']));  // Output: false

/*
Exercise 3:
Create a Safe Copy with Hidden Properties.
- Write a function 'createSafeObject(original, hiddenProps)' that takes an object and an array of property names to hide.
- The function should return a copy of the original object where the properties in hiddenProps are not enumerable
  (i.e., they won't show up in 'Object.keys()' or 'Object.entries()', but can still be accessed directly).

Requirements:
- Use 'Object.defineProperty()' or 'Object.defineProperties()' to hide specific properties.
- Ensure the copy retains all other properties as is.
*/
function createSafeObject(original, hiddenProps) {
    const safeObject = Object.assign({}, original);  // Shallow copy

    // Hide properties in the new object
    hiddenProps.forEach(prop => {
        if (prop in safeObject) {
            Object.defineProperty(safeObject, prop, {
                enumerable: false,   // Hide the property from iteration
                writable: true,      // Keep it writable
                configurable: true   // Keep it modifiable or deletable
            });
        }
    });

    return safeObject;
}

// Test object
const user = {
    name: "Alice",
    age: 28,
    password: "secret"
};

// Create a safe copy with the 'password' property hidden
const safeUser = createSafeObject(user, ["password"]);

console.log(Object.keys(safeUser));  // Output: ['name', 'age']
console.log(safeUser.password);      // Output: secret