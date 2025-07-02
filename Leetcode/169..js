var majorityElement = function (nums) {
  let mElement = NaN;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (count == 0) {
      mElement = element;
    }
    count += mElement == element ? 1 : -1
    
    
  }

  return mElement;


};
const nums = [3, 2, 3];
console.log(majorityElement(nums));