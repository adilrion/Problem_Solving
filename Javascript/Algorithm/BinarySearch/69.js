// 🧩 #Problem: [69. Sqrt(x)]
// ✨ #ProgrammingLanguage: Javascript

var mySqrt = function (x) {
    if (x === 0 || x === 1) {
        return x;
    }
    let start = 0;
    let end = x;
    let mid = -1;

    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        let Square = mid * mid;
        if (Square == x) {
            return mid;
        } else if (Square > x) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return Math.floor(end);
};

console.log(mySqrt(8));
