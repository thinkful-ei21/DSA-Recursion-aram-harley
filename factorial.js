function factorial(num) {
    // Base Case
    if (num === 0) {
        return 1;
    }
    // General Case
    return num * factorial(num - 1);

}

// Test Case
console.log(factorial(5));