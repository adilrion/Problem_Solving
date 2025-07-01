class Solution:
    def moveZero(self, nums: list[int]) -> None:
        p = 0
        for index, element in enumerate(nums):
            if element != 0:
                nums[p] = element
                p += 1
        for i in range(p, len(nums)):
            nums[i] = 0
        return nums


nums = [0, 1, 0, 3, 12]

r = Solution().moveZero(nums)
print(r)
