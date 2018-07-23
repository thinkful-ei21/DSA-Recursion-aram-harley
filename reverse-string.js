function reverseString(str) {
    // Base Case
    if (str === '') {
        return '';
    }
    // General Case
    return reverseString(str.substr(1)) + str.charAt(0);
}

// Test Case
console.log(reverseString('test'))