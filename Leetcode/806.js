function numberOfLines(widths, s) {
    let lines = 1;
    let currentWidth = 0;

  for (let char of s) {
        let charWidth = widths[char.charCodeAt(0) - "a".charCodeAt(0)];
        console.log( charWidth)
        if (currentWidth + charWidth > 100) {
            lines++;
            currentWidth = charWidth;
        } else {
            currentWidth += charWidth;
        }
    }

    return [lines, currentWidth];
}

// Example 1
let widths1 = Array(26).fill(10);
let s1 = "abcdefghijklmnopqrstuvwxyz";
console.log(numberOfLines(widths1, s1)); // Output: [3, 60]

// Example 2
let widths2 = [
    4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
    10, 10, 10, 10, 10, 10, 10,
];
let s2 = "bbbcccdddaaa";
console.log(numberOfLines(widths2, s2)); // Output: [2, 4]
