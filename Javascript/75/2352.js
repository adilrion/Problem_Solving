var equalPairs = function (grid) {
    /* 
    
      let lastNonZeroFoundAt = 0;

    // Traverse the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // Swap current non-zero element with the element at lastNonZeroFoundAt
            [nums[i], nums[lastNonZeroFoundAt]] = [nums[lastNonZeroFoundAt], nums[i]];
            lastNonZeroFoundAt++;
        }
    }
    
    */
    const rowMap = new Map();
    let count = 0;

    // Count the frequency of each row
    for (let row of grid) {
        const rowKey = row.join(",");
        rowMap.set(rowKey, (rowMap.get(rowKey) || 0) + 1);
    }

    // Compare each column against the rows
    const n = grid.length;
    for (let col = 0; col < n; col++) {
        const colArray = [];
        for (let row = 0; row < n; row++) {
            colArray.push(grid[row][col]);
        }
        const colKey = colArray.join(",");
        if (rowMap.has(colKey)) {
            count += rowMap.get(colKey);
        }
    }

    return count;
};


console.log(
    equalPairs([
        [3, 2, 1],
        [1, 7, 6],
        [2, 7, 7],
    ])
);