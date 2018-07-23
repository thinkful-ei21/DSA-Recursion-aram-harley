function anagrams(str) {
    // Variables
    let finalArr = [];
    // Base Case 
    if (str.length === 1) {
        return [str];
    }
    // General Caser
    for (let i = 0; i < str.length; i++) {
        const removed = str.slice(0, i) + str.slice(i + 1);
        const arr = anagrams(removed);
        for (let j = 0; j < arr.length; j++) {
            finalArr.push(str[i] + arr[j]);
        }
    }
    return finalArr;
}

// Test Case
console.log(anagrams('test'))