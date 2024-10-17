/**
 Pseudocode for checking if a person is elgible to vote or not using ternary operator
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * START
 *   INPUT age
 *
 *   // Using a ternary operator to check eligibility
 *   eligibility = (age >= 18) ? "You are eligible to vote" : "You are not eligible to vote"
 *
 *   PRINT eligibility
 * END
 */

let age = 21;
const eligibility = (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote.";
console.log(eligibility);