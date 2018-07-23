function countingSheep(num) {
    // Base Case
    if (num === 1) {
        console.log('Another sheep jumped over the fence')
        return;
    }

    console.log('Another sheep jumped over the fence')
    return countingSheep(num - 1)

    // General Case
}


// Test Case
countingSheep(3)