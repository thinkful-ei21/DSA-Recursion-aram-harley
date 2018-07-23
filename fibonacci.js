function fibonacci(num) {
    // Base Case
    if (num <= 0) {
        return 0;
    }
    if (num <= 2) {
        return 1;
    }
    // General Case 
    return fibonacci(num - 1) + fibonacci(num - 2);

}
// Test Case
console.log(fibonacci(5));