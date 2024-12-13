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

// TODO: Create test for subtractAsync function which should return the difference of two numbers

// TODO: Create test for squareAsync function which should handle zero correctly

// TODO: Create test for subtractAsync function which should handle negative numbers
