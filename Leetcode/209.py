class Solution:
    def minSubArray(self, target: int, numbers: list[int]) -> int:
        minL = float("inf")
        sum = 0
        left = 0

        for right in range(len(numbers)):
            sum += numbers[right]
            while sum >= target:
                minL = min(minL, right - left + 1)
                sum -= numbers[left]
                left += 1

        return 0 if minL == float("inf") else minL


target = 7
nums = [2, 3, 1, 2, 4, 3]
print(Solution().minSubArray(target, nums))


