function binary(num) {
    // Base Case
    if (num === 0) {
        return 0;
    }
    if (num === 1) {
        return 1;
    }

    // General Case
    let newNum = Math.floor(num / 2);
    return binary(newNum) + (num % 2).toString();
}

// Test Case
console.log(binary(54214));