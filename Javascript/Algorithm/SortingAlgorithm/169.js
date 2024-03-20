// 169. Majority Element
var majorityElement = function (nums) {
    let count = 0;
    let majorityElement;

    for (let i = 0; i < nums.length ; i++){
        if (count === 0) {
            majorityElement = nums[i]
            count = 1;
        } else if (majorityElement === nums[i]) {
            count++;
        } else {
            count--
        }
    }
    return majorityElement;

};
