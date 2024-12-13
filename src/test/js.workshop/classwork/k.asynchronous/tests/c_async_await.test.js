const {addAsync} = require('../utils/');

test('addAsync should return the sum of two numbers', async () => {
    const result = await addAsync(10, 15);
    expect(result).toBe(25);
});

test('addAsync should handle negative numbers', async () => {
    const result = await addAsync(-10, 5);
    expect(result).toBe(-5);
});

// TODO: Create test for squareAsync function which should return the square of a number
test('squareAsync should return the square of a number', async () => {
    const result = await squareAsync(5); // Wait for the promise to resolve
    expect(result).toBe(25); // Assert the result
});

// TODO: Create test for subtractAsync function which should return the difference of two numbers
test('subtractAsync should return the difference of two numbers', async () => {
    const result = await subtractAsync(20, 5);
    expect(result).toBe(15);
});

// TODO: Create test for squareAsync function which should handle zero correctly
test('squareAsync should handle zero correctly', async () => {
    const result = await squareAsync(0);
    expect(result).toBe(0);
});

// TODO: Create test for subtractAsync function which should handle negative numbers
test('subtractAsync should handle negative numbers', async () => {
    const result = await subtractAsync(-10, -5);
    expect(result).toBe(-5);
});
