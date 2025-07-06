var rotate = function (nums, k) {
    let rln = k % nums.length;

    function arrayRotate(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start += 1;
            end -= 1;
        }
    }
    // rotate the full array
    arrayRotate(0, nums.length - 1);
    // rotate first k
    arrayRotate(0, rln - 1);
    // rotate last k
    arrayRotate(rln, nums.length - 1);
};
let nums = [1, 2, 3, 4, 5, 6, 7],
    k = 3;

console.log(rotate(nums, k));
