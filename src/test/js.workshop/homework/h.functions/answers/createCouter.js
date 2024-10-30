function createCounter() {
    let count = 0;

    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        getValue() {
            return count;
        }
    };
}
/*
createCounter Function:
 - Defines a private count variable initialized to 0.
Returned Object:
 - increment Method: Increments count by 1 each time it’s called.
 - getValue Method: Returns the current value of count.
 - decrement Method: Decrements count by 1 each time it’s called.
Each call to createCounter creates a new counter with its own independent count variable.
 */
const counter1 = createCounter();
counter1.increment(); // Counter is now 1
counter1.increment(); // Counter is now 2
console.log(counter1.getValue()); // Should print 2
counter1.decrement(); // Counter is now 1
console.log(counter1.getValue()); // Should print 1

const counter2 = createCounter();
console.log(counter2.getValue()); // Should print 0, since it's a new counter
counter2.increment();
console.log(counter2.getValue()); // Should print 1