class Solution:
    def Calculate(self, nums: list[int], i: int, j: int) -> int:
        for l in range(1, len(nums)):
            nums[l] = nums[l] + nums[l - 1]
        print(nums)
        print(i)
        return nums[j] - nums[i - 1]


nums = [1, 2, 3, 4, 5, 6]
i = 1
j = 3

r = Solution().Calculate(nums, i, j)
print(r)
