// 6. Zigzag Conversion


var convert = function (s, numRows) {
    // Edge case: if only 1 row, return the string as is
    if (numRows === 1 || s.length <= numRows) return s;

    // Initialize an array to hold strings for each row
    const rows = Array.from({ length: numRows }, () => "");
    let currentRow = 0;
    let goingDown = false;

    // Iterate over each character in the string
    for (const char of s) {
        rows[currentRow] += char; // Append the character to the current row
        // Change direction at the top or bottom row
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        // Move to the next row (up or down)
        currentRow += goingDown ? 1 : -1;
    }
    // Concatenate all rows to get the final result
    return rows.join("");
};

console.log(convert("PAYPALISHIRING", 3));
