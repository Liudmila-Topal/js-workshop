/*
Example 1:
When counter will reach value 4, the iteration will be skipped
 */

for (let i = 0; i <= 10; i++) {
    if (i === 4) {
        continue;
    }
    console.log(i);
}
/*
Example 2:
continue statement is redundant if is the last one in the loop (no iteration will be skipped)
 */

for (let i = 0; i <= 10; i++) {
    console.log(i);
    if (i === 4) {
        continue;
    }
}

/*
Example 3:
continue statement will skip only the iteration of the inner loop in case there is an outer loop
 */

//Start outer loop
for (let i = 0; i <= 5; i++) {
    console.log(`\n--- This is ${i} iteration of the outer loop ---\n`);
    //Start inner loop
    for (let j = 0; j <= 5; j++) {
// The 3rd iteration will be skipped only for inner loop
        if (j === 3) {
            continue;
        }
        console.log(`This is ${j} iteration of the inner loop`);
    }
}