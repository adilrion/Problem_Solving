from typing import List


class Solution:
    def minStartValue(self, nums: List[int]) -> int:
        prefixSum = 0
        minPrefixSum = 0

        for num in nums:
            prefixSum += num
            print(prefixSum)
            minPrefixSum = min(minPrefixSum, prefixSum)

        return 1 - minPrefixSum


nums = [-3, 2, -3, 4, 2]

cl = Solution()
print(cl.minStartValue(nums))
