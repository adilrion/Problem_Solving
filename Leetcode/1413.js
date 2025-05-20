var minStartValue = function (nums) {
  let prefixSum = 0;
  let minVal = 0;
  nums.forEach(element => {
    prefixSum += element
    minVal = Math.min(minVal, prefixSum)
  });
  return 1 - minVal
};

const nums = [-3, 2, -3, 4, 2];
console.log(minStartValue(nums));