/*
Example 1:
When counter will reach value 4, the loop will be stopped
 */

for (let i = 0; i <= 10; i++) {
    if (i === 4) {
        console.log(`The loop stopped at ${i} iteration`);
        break;
    }
// This code won't get executed after break condition is met
    console.log(i);
}
/*
Example 2:
break statement can be the last one in the loop (the loop will be stopped when break condition is met)
 */

for (let i = 0; i <= 10; i++) {
    console.log(i);
    if (i === 5) {
        console.log(`The loop stopped at ${i} iteration`);
        break;
    }
}

/*
Example 3:
break statement will stop only the iteration of the inner loop
 */

// Start outer loop
for (let i = 0; i <= 5; i++) {
    console.log(`\n--- This is ${i} iteration of the outer loop ---\n`);
    //Start inner loop
    for (let j = 0; j <= 5; j++) {
// The 3rd iteration will be skipped only for inner loop
        if (j === 3) {
            console.log(`The inner loop stopped at ${j} iteration`);
            break;
        }
// This code won't get executed after break condition is met as is part of inner loop
        console.log(`This is ${j} iteration of the inner loop`);
    }
}