class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        words = s.split()
        if len(words) != len(pattern):
            return False
        char_to_word = {}
        word_to_char = {}
        for word, char in zip(words, pattern):
            if char in char_to_word:
                if char_to_word[char] != word:
                    return False
            else:
                char_to_word[char] = word
            if word in word_to_char:
                if word_to_char[word] != char:
                    return False
            else:
                word_to_char[word] = char
        return True


print(Solution().wordPattern("abba", "dog cat cat dog"))  # Output: True
print(Solution().wordPattern("abba", "dog cat cat fish"))  # Output: False
print(Solution().wordPattern("aaaa", "dog cat cat dog"))  # Output: False
