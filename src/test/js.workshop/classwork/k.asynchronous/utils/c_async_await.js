const squareAsync = async (num) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(num * num), 100); // Simulates an async operation
    });
};

// TODO: Create addAsync function  for existing tests
const addAsync = async (num1, num2) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(num1 + num2), 100); // Simulates an async operation
    });
};

// TODO: Create subtractAsync function
const subtractAsync = async (num1, num2) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(num1 - num2), 100); // Simulates an async operation
    });
};

module.exports = { squareAsync};
