var plusOne = function (digits) {
    // const convertIntoNumber = BigInt(digits.join(""));
    // const incremented = convertIntoNumber + 1n;
    // return Array.from(incremented.toString()).map(Number);

    return String(BigInt(digits.join("")) + 1n).split("");
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
