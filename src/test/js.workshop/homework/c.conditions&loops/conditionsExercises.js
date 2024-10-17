/*
Exercise 1: Simple if Statement
 Write a JavaScript program that checks if a number is greater than 10. If it is, log 'The number is greater than 10'.
*/
let num = 15;
// Write your conditional here
if (num > 10) {
    console.log('The number is greater than 10');
}

/*
Exercise 2. if-else Statement
Write a JavaScript program that checks if a number is odd or even. If the number is even, log 'The number is even', otherwise log 'The number is odd'.
*/
// let num = 7;
// Write your conditional here
if (num % 2 === 0) {
    console.log('The number is even');
} else {
    console.log('The number is odd');
}

/*
Exercise 3. Ternary Operator
Use the ternary operator to check if a person is old enough to drink (18+). Log 'Allowed to drink' or 'Not allowed to drink'.
*/
let age = 20;
// Write your conditional here
const result = age >= 18 ? 'Allowed to drink' : 'Not allowed to drink'
console.log(result);

/*
Exercise 4. else if Ladder
Write a program that grades a student based on their score:
90 and above: 'A'
80 to 89: 'B'
70 to 79: 'C'
60 to 69: 'D'
Below 60: 'F'
Log the appropriate message.
*/
let score = 75;
// Write your conditional here
if (score >= 90) {
    console.log('Grade A');
} else if (score >= 80) {
    console.log('Grade B');
} else if (score >= 70) {
    console.log('Grade C');
} else if (score >= 60) {
    console.log('Grade D');
} else {
    console.log('Grade F');
}


/*
Exercise 5. Nested If Statement: Age and Membership Checker
Write a program that checks if a person is eligible for a membership discount. The discount is available if the person is:
Under 18: gets a youth discount (5%)
65 and older: gets a senior discount (15%)
Otherwise (10%), only eligible if they are a member (isMember is true).
Log the appropriate message for each case.
*/
let memberAge = 45;
let isMember = true;
// Write your nested if condition here
if (isMember) {
    if (memberAge < 18) {
        console.log('You get youth discount of 5%')
    } else if (memberAge >= 65) {
        console.log('You get senior discount of 15%')
    } else {
        console.log('You get adult discount of 10%')
    }
} else {
    console.log('You are not eligible for any discount')
}

/*
Exercise 6. Checking Multiple Conditions (&& and ||)
Write a program that checks if a person is eligible to vote. A person can vote if:
1. They are 18 or older and a citizen.
2. OR they are 16 or older with special permission.
*/
let personAge = 17;
let isCitizen = true;
let hasSpecialPermission = true;
// Write your conditional here
if ((personAge >= 18 && isCitizen) || (personAge >= 16 && hasSpecialPermission)) {
    console.log('Person is eligible to vote');
} else {
    console.log('Person is not eligible to vote');
}

/*
Exercise 7. Switch Statement: Traffic Light System
Write a program that simulates a traffic light system. Based on the input color ('red', 'yellow', or 'green'), log the appropriate action:
'red': 'Stop'
'yellow': 'Get ready'
'green': 'Go'
*/
let trafficLight = 'yellow';
// Write your switch statement here
switch (trafficLight.toLowerCase()) {
    case 'red':
        console.log('Stop');
        break;
    case 'yellow':
        console.log('Get ready');
        break;
    case 'green':
        console.log('Go');
        break;
    default:
        console.log('Invalid input');
}

/*
Exercise 8. Checking for Truthy/Falsy Values
Write a program that checks if a variable input has a value. If it is falsy (check the falsy list), log 'No input provided'.
*/
let input = '';
// Write your conditional here
if (input) {
    console.log('The input value is: ' + input);
} else {
    console.log('No input provided');
}

/*
Exercise 9. Conditional Based on Type
Write a program that checks the type of a variable and logs a different message depending on whether it's a string, number, boolean or something else.
*/
let value = null;
// Write your conditional here
if (typeof value === 'string') {
    console.log('The variable is a string');
} else if (typeof value === 'number') {
    console.log('The variable is a number');
} else if (typeof value === 'boolean') {
    console.log('The variable is a boolean');
} else {
    console.log('The variable is something else');
}
