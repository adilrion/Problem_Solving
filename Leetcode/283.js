// 283. Move Zeroes
var moveZeroes = function (nums) {

  if (nums.length < 0) return 0
  
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    const el = nums[i]
    if (el != 0) {
      nums[index] = el;
      index++
    }
    
  }
  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
    
  }

  return nums

};

console.log(moveZeroes([0, 1, 0, 3, 12]));