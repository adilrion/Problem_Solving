// Problem: 278. First Bad Version
// Programming Language: Javascript

var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 1;
        let right = n;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (isBadVersion(mid)) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }
        return left;
    };
};
