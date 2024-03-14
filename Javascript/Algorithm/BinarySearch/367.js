// Problem: 367. Valid Perfect Square
// Programming Language: Javascript

var isPerfectSquare = function (num) {
    let start = 0;
    let end = num;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        console.log("🚀 ~ isPerfectSquare ~ mid:", mid)
        let Square = mid * mid;
        console.log("-", Square)
        if (Square == num) {
            return true;
        } else if (Square > num) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return false;
};

isPerfectSquare(16);
