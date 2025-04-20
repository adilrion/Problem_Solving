class Solution:
    def removeElement(self, nums: list[int], val: int) -> int:
        p = len(nums) - 1
        while p >= 0:
            if nums[p] == val:
                nums.pop(p)
            p -= 1
        return len(nums)


nums = [3, 2, 2, 3]
val = 3

r = Solution().removeElement(nums, val)
print(r)
