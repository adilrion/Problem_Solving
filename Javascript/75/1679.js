
var maxOperations = function (nums, k) {


 let freq = {};
 let operations = 0;

 for (const num of nums) {
     let complement = k - num;

     if (freq[complement] > 0) {
         operations++;
         freq[complement]--;
     } else {
         freq[num] = (freq[num] || 0) + 1;
     }
  }

 return operations;


};


const nums = [1, 2, 3, 4], k = 5


console.log(maxOperations(nums, k));