class Solution:
    def canJump(self, nums: list[int]) -> bool:
        l = 0
        for i in range(len(nums)):
          if i > l:
            return False
          l = max(l, i + nums[i])
          if l >= len(nums) -1 :
            return True
          


nums = [3, 2, 1, 0, 4]
print(Solution().canJump(nums))
