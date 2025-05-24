class Solution:
    def checkSubarraySum(self, nums: list[int], k: int) -> bool:
        prefix_mod = 0
        prefix_map = {0: -1}
        for i in range(len(nums)):
            prefix_mod = (prefix_mod + nums[i]) % k
            if prefix_mod in prefix_map:
                if i - prefix_map[prefix_mod] > 1:
                    return True
            else:
                prefix_map[prefix_mod] = i
        return False


nums = [5, 0, 0, 0]
k = 6
print(Solution().checkSubarraySum(nums, k))
 