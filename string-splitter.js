
function split(str, separator) {
    // Base Case
    if (!str.includes(separator)) {
        return [str];
    }

    // General Case
    let index = str.indexOf(separator);
    return [str.substring(0, index), ...split(str.slice(index + 1), separator)];
}

// Test Case
console.log(split('this-is-a-test', '-'))