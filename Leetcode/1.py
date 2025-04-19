# brute force solution

# class Solution:
#     def twoSum(self, nums: list[int], target: int) -> list[int]:
#       for x in range(len(nums)):
#         for j in range(x+1, len(nums)):
#           if nums[x] + nums[j] == target:
#             return [x, j]
        
        

# result = Solution()
# print(result.twoSum(nums, target))


# hashmap
class Solution2:
  def twoSum(self, nums:list[int], target: int) -> list[int]:
    hashmap = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in hashmap:
            return [hashmap[complement], i]
          
        hashmap[num] = i
      
nums = [2,7,11,15]
target = 9
result2 = Solution2()
print(result2.twoSum(nums, target))