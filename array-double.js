function arrayDouble(arr) {
    // Base Case
    if (arr.length === 0) {
        return [];
    }
    // General Case
    return [arr[0] * 2, ...arrayDouble(arr.slice(1))];


}

// Test Case
console.log(arrayDouble([2, 3, 4]));