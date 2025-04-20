class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        if len(nums) <= 2:
            return len(nums)

        slow = 2
        for i in range(2, len(nums)):
            if nums[i] != nums[slow - 2]:
                nums[slow] = nums[i]
                slow += 1

        return slow


nums = [1, 1, 1, 2, 2, 3]
r = Solution().removeDuplicates(nums)
print(r)
