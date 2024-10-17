/**
 * Pseudocode for checking if a number is positive, negative or zero
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * START
 *   INPUT number
 *   IF number > 0 THEN
 *     PRINT "The number is positive"
 *   ELSE IF number < 0 THEN
 *     PRINT "The number is negative"
 *   ELSE
 *     PRINT "The number is zero"
 *   END IF
 * END
 */

const number = 30;
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}
