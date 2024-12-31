var equalPairs = function (grid) {
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