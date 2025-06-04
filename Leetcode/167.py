class Solution:
    def twoSum(self, numbers: list[int], target: int) -> list[int]:
        left = 0
        right = len(numbers) - 1

        while left < right:
            c_sum = numbers[left] + numbers[right]
            if target == c_sum:
                return [left + 1, right + 1]
            elif c_sum < target:
                left += 1
            else:
                right -= 1
        return []


numbers = [2, 7, 11, 15]
target = 9
print(Solution().twoSum(numbers, target))
