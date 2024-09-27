function checkNumber(num) {
    // Every cycle has 4 numbers: 2 selected, 2 skipped.
    // The pattern repeats every 4 numbers.

    // Calculate the remainder when num is divided by 4
    const remainder = num % 4;



    // Return true if remainder is 1 or 2, because 1 and 2 are selected, and 3 and 4 are skipped
    return remainder === 1 || remainder === 2;
}

// Test the function
console.log(checkNumber(1)); // true
console.log(checkNumber(2)); // true
console.log(checkNumber(3)); // false
console.log(checkNumber(4)); // false
console.log(checkNumber(5)); // true
console.log(checkNumber(6)); // true
console.log(checkNumber(7)); // false
console.log(checkNumber(8)); // false
console.log(checkNumber(9)); // true
console.log(checkNumber(10)); // true
