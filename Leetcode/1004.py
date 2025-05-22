from typing import List


class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        left = 0
        max_length = 0
        zero_count = 0

        for right in range(len(nums)):
            # Expand the window
            if nums[right] == 0:
                zero_count += 1

            # Shrink the window if zero count exceeds k
            while zero_count > k:
                if nums[left] == 0:
                    zero_count -= 1
                left += 1

            # Update maximum length
            max_length = max(max_length, right - left + 1)

        return max_length


# Examples
solution = Solution()

# Example 1
nums1 = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
k1 = 2
print(solution.longestOnes(nums1, k1))  # Output: 6

# Example 2
nums2 = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]
k2 = 3
print(solution.longestOnes(nums2, k2))  # Output: 10
