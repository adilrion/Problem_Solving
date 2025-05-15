class Solution:
    def getLongestSubsequence(self, words: list[str], groups: list[int]) -> list[str]:
        result = []
        last_group = None

        for word, group in zip(words, groups):
            if last_group is None or group != last_group:
                result.append(word)
                last_group = group

        return result


solution = Solution()

words1 = ["e", "a", "b"]
groups1 = [0, 0, 1]
print(groups1)
print(solution.getLongestSubsequence(words1, groups1))

words2 = ["a", "b", "c", "d"]
groups2 = [1, 0, 1, 1]
print(solution.getLongestSubsequence(words2, groups2))

