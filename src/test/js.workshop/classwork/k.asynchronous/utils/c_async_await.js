const addAsync = async (num1, num2) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(num1 + num2), 100); // Simulates an async operation
    });
};

// TODO: Create squareAsync function  for existing tests

// TODO: Create subtractAsync function

module.exports = { addAsync};
