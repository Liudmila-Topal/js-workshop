const areAllPositive = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return false;
        }
    }
    return true;
}

console.log(areAllPositive([1, 2, 3, 4])); //Output true
console.log(areAllPositive([1, 2, -3, 4])); //Output false