// Problem: 441. Arranging Coins
// ProgrammingLanguage: Javascript
var arrangeCoins = function (n) {
    if (n <= 1) {
        return n;
    }
    let staircase = 0;
    let start = 1;
    let end = n;

    while (start <= end) {
        end -= start;
        if (end >= 0) {
            staircase++;
        }
        start++;
    }
    return staircase;
};

console.log(arrangeCoins(5)); // Output should be 2

