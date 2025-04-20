// 238. Product of Array Except Self

var productExceptSelf = function (nums) {


    if(nums.length === 0) return []
    var l = nums.length;
    var result = Array(l).fill(1);


    let prefix = 1;
    for (var i = 0; i < l; i++) {
     const element = nums[i];
        result[i] = prefix;
        prefix *= element;
    }

    let suffix = 1;
    for (var index = l - 1; index >=0 ; index--) {
        const element = nums[index];
        result[index] *= suffix
        suffix *= element
    }
    

    return result;
   
};

const nums = [1, 2, 3, 4];

console.log(productExceptSelf(nums));
// Input: nums = [1, 2, 3, 4];
// Output: [24, 12, 8, 6];
