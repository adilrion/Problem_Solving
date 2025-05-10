class Solution:
    def H_index(self, citations: list[int]) -> int:
        citations.sort(reverse=True)
        h = 0
        for i, citation in enumerate(citations):
            if citation >= i + 1:
                h = i + 1
            else:
                break
        return h


citations = [3, 0, 6, 1, 5]
# citations = [3, 0, 6, 1, 5, 2]
print(Solution().H_index(citations))
