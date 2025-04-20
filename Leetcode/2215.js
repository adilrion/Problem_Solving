// 2215. Find the Difference of Two Arrays
//


var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const uniqueToNums1 = [...set1].filter(num => !set2.has(num));

  const uniqueToNums2 = [...set2].filter(num => !set1.has(num));

  return [uniqueToNums1, uniqueToNums2]
}


let nums1 = [1, 2, 3],
    nums2 = [2, 4, 6];

console.log(findDifference(nums1, nums2));
