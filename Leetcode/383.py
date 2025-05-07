class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        char_in = {}
        for char in magazine:
            char_in[char] = char_in.get(char, 0) + 1

        for char in ransomNote:
            if char not in char_in or char_in[char] == 0:
                return False
            char_in[char] -= 1
        return True


solution = Solution()
print(solution.canConstruct("a", "b"))  # Output: False
print(solution.canConstruct("aa", "ab"))  # Output: False
print(solution.canConstruct("aa", "aab"))  # Output: True
