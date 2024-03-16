
// Problem: [1539. Kth Missing Positive Number
// ProgrammingLanguage: Javascript
var findKthPositive = function (arr, k) {
    let missingCount = 0;
    let currentNum = 1;
    let i = 0;

    while (missingCount < k) {
        if (i < arr.length && arr[i] === currentNum) {
            i++;
        } else {
            missingCount++;
        }
        if (missingCount === k) {
            return currentNum;
        }
        currentNum++;
    }
};
console.log(findKthPositive([2, 3, 4, 7, 11], 5));
