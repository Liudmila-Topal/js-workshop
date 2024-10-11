/**
 * Pseudocode for printing first n numbers using a do...while loop
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * START
 *   INPUT n
 *
 *   // Initialize a counter variable
 *   counter = 0
 *
 *   DO
 *     PRINT counter
 *     counter = counter + 1  // Increment the counter
 *   WHILE counter <= n
 * END
 */

let limit = 50;
let counter = 0;

do {
    console.log(counter);
    counter++;
} while (counter <= limit);