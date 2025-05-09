class Solution:
    def jump(self, nums: list[int]) -> int:
        n = len(nums)
        current_index = 0
        jumps = 0
        farthest = 0

        for i in range(n - 1):
            farthest = max(farthest, i + nums[i])
            if i == current_index:
                jumps += 1
                current_index = farthest

                if current_index >= n - 1:
                    break

        return jumps


# Example usage:
nums = [2, 3, 1, 1, 4]
solution = Solution()
print(solution.jump(nums))  # Output: 2
