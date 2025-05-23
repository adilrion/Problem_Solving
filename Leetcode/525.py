class Solution:
    def findMaxLength(self, nums: list[int]) -> int:
        prefix_map = {0: -1}
        prefix_sum = 0
        maxLength = 0

        for i, val in enumerate(nums):
            prefix_sum += 1 if val == 1 else -1

            if prefix_sum in prefix_map:
                maxLength = max(maxLength, i - prefix_map[prefix_sum])
            else:
                prefix_map[prefix_sum] = i
        return maxLength


nums = [0, 1, 0, 1]
print(Solution().findMaxLength(nums))
