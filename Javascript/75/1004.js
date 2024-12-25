// 1004. Max Consecutive Ones III

var longestOnes = function (nums, k) { 

  let left = 0; 
  let maxLength = 0;
  let zeroCount = 0; 

  for (let right = 0; right < nums.length; right++) {
      // Expand the window
      if (nums[right] === 0) {
          zeroCount++;
    }

      // Shrink the window if the number of 0's exceeds k
    while (zeroCount > k) {
      console.log(zeroCount);
          if (nums[left] === 0) {
              zeroCount--;
          }
          left++;
      }

    // Update the maximum length
      maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;

};



const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
  k = 2;
    
  console.log(longestOnes(nums, k));