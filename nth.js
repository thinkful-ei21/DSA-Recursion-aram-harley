function nth(num) {
    // Base Case
    if (num <= 1) {
        return num;
    }

    // General Case
    return num + nth(num - 1)
}

// Test Case
console.log(nth(1))
console.log(nth(2))
console.log(nth(3))
console.log(nth(4))
console.log(nth(5))
console.log(nth(6))