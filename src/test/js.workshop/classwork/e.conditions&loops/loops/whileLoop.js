/**
 * Pseudocode for printing first n numbers using a while loop
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * START
 *   INPUT n
 *
 *   // Initialize a counter variable
 *   counter = 0
 *
 *   WHILE counter <= n DO
 *     PRINT counter
 *     counter = counter + 1  // Increment the counter
 *   END WHILE
 * END
 */

let limit = 50;
let counter = 0;

while (counter <= limit) {
    console.log(counter);
    counter++;
}