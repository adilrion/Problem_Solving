import re

class Solution:
    def isPalindrome(self, s: str) -> bool:
        # Use regex to remove non-alphanumeric characters
        filtered = re.findall(r'[a-zA-Z0-9]', s)
        # Convert to lowercase
        processed_string = ''.join(filtered).lower()
        # Check if the string reads the same forward and backward
        return processed_string == processed_string[::-1]

# Example usage
solution = Solution()
print(solution.isPalindrome("A man, a plan, a canal: Panama"))  # Output: True
print(solution.isPalindrome("race a car"))                     # Output: False
print(solution.isPalindrome(" "))                              # Output: True
print(solution.isPalindrome("ab_a"))                           # Output: Trues
