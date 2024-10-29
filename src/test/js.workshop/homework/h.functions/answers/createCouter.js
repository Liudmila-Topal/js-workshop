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