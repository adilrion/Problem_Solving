class Solution:
    def subarraySum(self, nums: list[int], k: int) -> int:
        prefix_map = {0: 1}
        count = 0
        prefix_sum = 0
        for val in nums:
            prefix_sum += val
            if prefix_sum - k in prefix_map:
                count += prefix_map[prefix_sum - k]
            prefix_map[prefix_sum] = prefix_map.get(prefix_sum, 0) + 1
        return count


nums = [1, 1, 1]
k = 2
print(Solution().subarraySum(nums, k))
