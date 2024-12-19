//334. Increasing Triplet Subsequence

var increasingTriplet = function (nums) {

  if (nums.length < 3) {
    return false
  } 


  let first = Infinity,
      second = Infinity;

    for (let i = 0; i < nums.length; i++) {
      let element = nums[i];
      console.log(element)

      if (element <= first) {
        first = element;
      } else if (element <= second) {
        second = element
      } else {
        return true
      }


    }

    return false;
};




const nums = [20, 100, 10, 12, 5, 13];

const nums2 = [1, 2, 3, 4, 5];
const nums3 = [5, 4, 3, 2, 1];
console.log(increasingTriplet(nums3));

// Input: nums = [1,2,3,4,5]
// [20, 100, 10, 12, 5, 13];
// Output: true
// Explanation: Any triplet where i < j < k is valid.