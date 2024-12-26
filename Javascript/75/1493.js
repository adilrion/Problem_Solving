var longestSubarray = function (nums) {
  if (nums.length === 0) return 0;
  let left = 0;
  let maxLongestSubArray = 0;
  let zeroCount = 0;

  for (let right = 0; right < nums.length; right++) {
      let element = nums[right];

      if (element === 0) {
          zeroCount++;
      }

      // Shrink the window if more than one zero
      while (zeroCount > 1) {
          if (nums[left] === 0) {
              zeroCount--;
          }
          left++;
      }

      // Calculate the longest subarray size (excluding one element)
      maxLongestSubArray = Math.max(maxLongestSubArray, right - left);
  }

  return maxLongestSubArray;
};

const nums = [1, 1, 0, 1];
console.log(longestSubarray(nums));
