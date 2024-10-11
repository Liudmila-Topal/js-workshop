/**
 * Pseudocode for checking if a number is even or odd
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * START
 *   INPUT number
 *   IF number % 2 = 0 THEN
 *     PRINT "The number is even"
 *   ELSE
 *     PRINT "The number is odd"
 *   END IF
 * END
 */

const number = 11;

if (number % 2 === 0) {
    console.log('The number is even.')
} else {
    console.log('The number is odd.');
}