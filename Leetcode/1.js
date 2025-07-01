var twoSum = function (nums, target) {
  const tr = new Map();
  for (let i = 0; i < nums.length; i++) {
      const rm = target - nums[i];
     
      if (tr.has(rm)) {
          return [tr.get(rm), i];
      }

      tr.set(nums[i], i);
    
  }

};
const nums = [2, 7, 11, 15],
  target = 9;
    
console.log(twoSum(nums, target));