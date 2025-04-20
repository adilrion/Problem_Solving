class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        if len(nums) == 1:
            return len(nums)
        p = len(nums) - 1
        while p > 0:
            if nums[p] == nums[p - 1]:
                nums.pop(p)
                p -= 1
            else:
                p -= 1
        return len(nums)


nums = [1]
r = Solution().removeDuplicates(nums)
print(r)


# best solution
class Solution2:
    def remove(self, nums: list[int]) -> int:
        if not nums:
            return 0

        unique_index = 0

        for i in range(1, len(nums)):
            if nums[i] != nums[unique_index]:
                unique_index += 1
                nums[unique_index] = nums[i]
        return unique_index + 1


nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
print(nums2[0], nums2[2])
r = Solution2().remove(nums2)
# print(r)
