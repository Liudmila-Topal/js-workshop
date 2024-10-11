/**
 * Pseudocode for printing object properties using a for ... in loop
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * START
 *   // Define an object with properties
 *   person = {
 *     name: "Alice",
 *     age: 30,
 *     city: "New York"
 *   }
 *
 *   // Using FOR...IN loop to iterate through the object properties
 *   FOR property IN person DO
 *     PRINT property + ": " + person[property]
 *   END FOR
 * END
 */

const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
// Using for ... in loop
for (let property in person) {
    console.log(property + ": " + person[property]);
}